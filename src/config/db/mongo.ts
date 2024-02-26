import { MongooseModule } from '@nestjs/mongoose';

export class MongoConfig {
  static init() {
    const uri =
      process.env.MONGO_URL_CONNECTION ||
      'mongodb://test:test@localhost:27017/';

    return MongooseModule.forRoot(uri);
  }

  //   static async connection() {
  //     const uri =
  //       process.env.MONGO_URL_CONNECTION ||
  //       'mongodb://test:test@localhost:27017/';

  //     await mongoose.createCon
  //   }
}
