import {  IsNotEmpty, IsString } from "class-validator";

 class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    

    @IsNotEmpty()
    @IsString()
    // @IsPassword()
    password: string;

    @IsNotEmpty()
    @IsString()
    token: string;
}
export {CreateUserDto}