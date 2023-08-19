import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return await this.createUser(createUserDto)
  }

  async findAll() {
    return await this.findAllUsers();
  }

  async findOne(id: string) {
    return await this.findUserById(id)
  }

  async findEmail(email:string) {
    return await this.findUserByEmail(email)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async findUserById(id: string) {
            return await this.prismaService.user.findUnique({
            where: {
                id: id
            },
            select: {
                        id: true,
                        email: true,
                        first_name: true,
                        last_name: true,
                        role: true
            }
        });
  }
    private async findUserByEmail(email: string) {
            return await this.prismaService.user.findUnique({
            where: {
                email: email
            },
            select: {
                        id: true,
                        email: true,
                        first_name: true,
                        last_name: true,
                        password: true,
                        role: true
            }
        });
  }

    private async findAllUsers() {
            return await this.prismaService.user.findMany({
            where: {},
            select: {
                        id: true,
                        email: true,
                        first_name: true,
                        last_name: true,
                        role: true
            }
        });
  }

    private async createUser(createUserDto: CreateUserDto) {
            return await this.prismaService.user.create({
            data: {
                email: createUserDto.email,
                first_name: createUserDto.first_name,
                last_name: createUserDto.last_name,
                password: "password",
                role: createUserDto.role,
                telephone: "",
                permissions: []
            },
            select: {
                        id: true,
                        email: true,
                        first_name: true,
                        last_name: true,
                        role: true
            }
        });
  }
}
