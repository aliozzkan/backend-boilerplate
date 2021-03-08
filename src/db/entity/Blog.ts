import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Blog extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    content!: string;

    @CreateDateColumn()
    createDate?: string;

    @UpdateDateColumn()
    updateDate?: string;

    @ManyToOne(type => User, (user: User) => user.blogs)
    user?: User;
}
