import { User } from "./user";

export class Room {
    room_id: number;
    room_name: string;
    joined_users: Set<User>;
    banned_users: Set<User>;

    constructor(room_id: number, room_name: string) {
        this.room_id = room_id;
        this.room_name = room_name;
        this.joined_users = new Set<User>();
        this.banned_users = new Set<User>();
    }

    /**
     * 아무런 인증과정 없이 이 함수를 부르는 것은 엄격히 제한됩니다
     * @param user_uid 
     */
    async addUser(user_uid: number) {
        try {
            const user = await User.findUser(user_uid);
            if (this.banned_users.has(user)) throw "case banned";

        } catch (error) {
            // TODO
            // case  나눠서 예외 처리하도록 하기
            console.error(`[ERROR] user (${user_uid}) already existing`);
            console.error(`[ERROR] user (${user_uid}) has been banned from ${this.room_name} (${this.room_id})`)
            console.error(`[ERROR] : something goes wrong sorry, try again few minutes later!`)
        }
    }

    /**
     * 아무런 인증과정 없이 이 함수를 부르는 것은 엄격히 제한됩니다
     * @param user_uid 
     */
    async removeUser(user_uid: number) {
        try {
            const user = await User.findUser(user_uid);
            this.joined_users.delete(user);

        } catch (error) {
            // TODO
            // case 나눠서 예외 처리하도록 하기
            console.error(`[ERROR] : user (uid=${user_uid}) does not exist!!`);
            console.error(`[ERROR] : user (${user_uid}) does not exist in room "${this.room_name} (${this.room_id})"`)
            console.error(`[ERROR] : something goes wrong sorry, try again few minutes later!`)
        }
    }

    /**
     * 아무런 인증과정 없이 이 함수를 부르는 것은 엄격히 제한됩니다
     * @param user_uid 
     */
    async banUser(user_uid: number) {
        try {
            const user = await User.findUser(user_uid);
            this.joined_users.delete(user)
            this.banned_users.add(user);
        } catch (error) {
            // TODO
            // case 나눠서 예외 처리하도록 하기
            console.error(`[ERROR] : user (${user_uid}) already banned!`)
            console.error(`[ERROR] : something goes wrong sorry, try again few minutes later!`)
        }
    }
}