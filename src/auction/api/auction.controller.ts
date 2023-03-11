import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/entities/user.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth-guard';
import { AuctionService } from '../service/auction.service';
import { CreateAuctionApiDto } from './dto';
import { join } from 'path';
import { AuctionRepository } from '../auction.repository';
import { Auction } from 'src/entities/auction.entity';

export const storage = {
  storage: diskStorage({
    destination: './upload',
    filename: (req, file, cb) => {
      const filename: string = file.originalname;

      cb(null, `${filename}`);
    },
  }),
};

@UseGuards(JwtAuthGuard)
@Controller('auction')
export class AuctionController {
  constructor(
    private readonly auctionService: AuctionService,
    private readonly auctionRepository: AuctionRepository,
  ) {}

  @Get(':auctionId')
  async getImage(@Param('auctionId') auctionId: number): Promise<Auction> {
    const auction = await this.auctionRepository.findOne({
      where: { id: auctionId },
    });
    //const imagePath = join(process.cwd(), 'upload', auction.image);
    //res.sendFile(imagePath);
    return auction;
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('image', storage))
  async createAuction(
    @UploadedFile() image,
    @CurrentUser() user: User,
    @Body() body: CreateAuctionApiDto,
  ) {
    return await this.auctionService.createAuction({
      title: body.title,
      subtitle: body.subtitle,
      userId: user.id,
      duration: body.duration,
      image: image.originalname,
    });
  }

  // @Post('test')
  // @UseInterceptors(FileInterceptor('file', storage))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  // }
}
