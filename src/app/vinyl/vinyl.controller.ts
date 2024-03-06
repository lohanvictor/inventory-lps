import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { VinylService } from './vinyl.service';
import { CreateVinylDto } from './dto/create-vinyl.dto';
// import { UpdateVinylDto } from './dto/update-vinyl.dto';

@Controller('vinyls')
export class VinylController {
  constructor(private readonly vinylService: VinylService) {}

  @Post()
  create(@Body() createVinylDto: CreateVinylDto) {
    return this.vinylService.create(createVinylDto);
  }

  @Get()
  findAll() {
    return this.vinylService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.vinylService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVinylDto: UpdateVinylDto) {
  //   return this.vinylService.update(+id, updateVinylDto);
  // }

  @Delete(':id')
  remove(@Param('id') externalId: string) {
    return this.vinylService.remove(externalId);
  }
}
