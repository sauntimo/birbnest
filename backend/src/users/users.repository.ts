import { Injectable } from '@nestjs/common';
import { supabase } from 'src/database/supabase';
import { User } from './entities/user.entity';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll = async (): Promise<User[]> => {
    const { data: users, error } = await supabase
      .from<User>('user')
      .select('*');

    if (error) {
      throw error;
    }
    return users;
  };

  findOne = async (id: string): Promise<User | undefined> => {
    const { data: users, error } = await supabase
      .from<User>('user')
      .select('id, email')
      .filter('id', 'eq', id)
      .limit(1);

    if (error) {
      throw error;
    }
    return users?.[0];
  };

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
