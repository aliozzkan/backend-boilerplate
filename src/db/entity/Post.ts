import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import {User} from "./User";
import {IsNotEmpty,  IsString} from "class-validator";


@Entity()
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @IsString()
    @Column()
    content!: string;

    @IsString()
    @Column({nullable: true})
    media?: string;

    @CreateDateColumn()
    createDate?: string;

    @UpdateDateColumn()
    updateDate?: string;

    @ManyToOne(type => User, (user: User) => user.posts)
    user?: User;
}
