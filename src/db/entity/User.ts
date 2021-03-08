import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import {IsNotEmpty, IsEmail, IsInt, IsString} from "class-validator";
import {Blog} from "./Blog";
import {Post} from "./Post";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @IsNotEmpty()
    @IsString()
    @Column()
    firstname!: string;

    @IsNotEmpty()
    @IsString()
    @Column()
    lastname!: string;

    @IsEmail()
    @Column()
    email!: string;

    @IsNotEmpty()
    @IsString()
    @Column()
    password!: string;

    @OneToMany(type => Blog, (blog: Blog) => blog.user)
    blogs?: Blog[];

    @OneToMany(type => Post, (post: Post) => post.user)
    posts?: Post[];
}
