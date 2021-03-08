import {
  JsonController,
  Get,
  Res,
  Post,
  UploadedFile,
  Authorized,
  CurrentUser,
  Body,
} from "routing-controllers";
import { Response } from "express";
import { Ali } from "../middlewares/auth";
import { User } from "../db/entity/User";
import { Blog } from "../db/entity/Blog";
import { fileUploadOptions, File } from "../helpers/fileOptions";
import {Roles} from "../configs/roles";
import {validate} from "class-validator";

@JsonController()
export class Deneme {
  @Get("/")
  firstDeneme(@Ali() Ali: string, @Res() res: Response) {
    console.log(Ali);
    return res.json({ message: "Hi" }).status(200);
  }

  @Get("/deneme")
  async createUser(@Res() response: Response) {
    const user = new User();
    user.firstname = "Ali";
    user.lastname = "Özkan";
    user.email = "aliozzkan@gmail.com";

    await user.save();

    const blog = new Blog();
    blog.title = "Blog Title";
    blog.content = "Blog Content";
    blog.user = user;

    await blog.save();

    const blogList = await Blog.find({ relations: ["user"] });
    return response.json({ BlogList: blogList }).status(200);
  }

  @Authorized(Roles.ADMIN)
  @Get("/blog-list")
  async getUserList(
    @CurrentUser() user: { id: number; name: string; roles: string[] },
    @Res() response: Response
  ) {
    const blogList = await Blog.find({ relations: ["user"] });
    const userList = await User.find({ relations: ["blogs"] });

    return response
      .json({ User: user, BlogList: blogList, UserList: userList })
      .status(200);
  }

  @Post("/file")
  async getFile(
    @UploadedFile("fileName", { options: fileUploadOptions("images") }) file: File,
    @Res() response: Response
  ) {
    console.log(file);
    return response
      .json({ file: "http://localhost:3000/uploads/images/" + file.filename })
      .status(200);
  }

  @Post("/user")
  async addUser(@Body() body: User, @Res() res: Response) {
    const errors = await validate(body);
    if(errors.length > 0) {
      return res.json({errors}).status(400);
    } else {
     
      await body.save();
  
  
      return res.json({ body }).status(200);
    }

    
  }
}
