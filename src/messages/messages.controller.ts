import { Controller, Get, Post } from "@nestjs/common";

@Controller('/messages')
export class MessagesController{
  @Get()
  listMessages(){
    return('Get all')
  }

  @Post()
  createMessages(){
    return('Create')
  }

  @Get('/:id')
  getMessages(){
    return('Get one')
  }
}