import { Body, Controller, Get, Post, Query, Render, Req, Res } from '@nestjs/common';
import { query, response } from 'express';
import { template } from 'handlebars';
import { AppService } from './app.service';
import { verifikasilogindto } from './dto/verifikasilogin.dto';
import { verifikasilupanypswrdvrfksidto } from './dto/verifikasilupanypassword.dto';
import { verifikasiregistrasidto } from './dto/verifikasiregistrasi.dto';
import { vrfksidto } from './dto/vrfksi.dto';

@Controller('email')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('jnsjnstmpltemail')
  async verifikasi(@Body() vrfksidto:vrfksidto)
  {
     
      const vrfksijnsjns = await this.appService.verifikasi(vrfksidto.templatejnsjns, vrfksidto.email);
      return vrfksijnsjns;
  }
 
//   @Post('emailregistrasi')
// async verifikasiregistrasi(@Body() verifikasiregistrasidto:verifikasiregistrasidto ) {
//   console.log(verifikasiregistrasidto);
//   return this.appService.verifikasiregistrasi(verifikasiregistrasidto);
// }












// @Post('jnsjnstmpltemail')
//   async verifikasi(@Body() vrfksidto:vrfksidto)
//   {
     
//       const vrfksiquery = await this.appService.verifikasi(vrfksidto.templatejnsjns, vrfksidto.email);
//       return vrfksiquery;
//   }










  // @Post('jnsjnstmpltemail')
  // async verifikasi(@Body() vrfksidto:vrfksidto)
  // {
     
  //     const vrfksiquery = await this.appService.verifikasi(vrfksidto.templatejnsjns, vrfksidto.email);
  //     return vrfksiquery;
  // }





  // @Post('jnsjnstmpltemail')
  // async verifikasi(@Body() vrfksidto:vrfksidto)
  // {
     
  //     const vrfksiquery = await this.appService.verifikasi(vrfksidto.templatejnsjns, vrfksidto.email);
  //     return vrfksiquery;
  // }





  // @Post('jnsjnstmpltemail')
  // async verifikasi(@Body() vrfksidto:vrfksidto)
  // {
     
  //     const vrfksiquery = await this.appService.verifikasi(vrfksidto.templatejnsjns, vrfksidto.email);
  //     return vrfksiquery;
  // }









 


















// @Post('emailverifikasi')
// async verifikasilogin(@Body() verifikasilogindto:verifikasilogindto) {
//   console.log(verifikasilogindto);
//   return this.appService.verifikasilogin(verifikasilogindto.templatejnsjns, verifikasilogindto.username, verifikasilogindto.email);

// }




















// @Post('emaillupanypassword')
// async verifikasilupanypassword(@Body() verifikasilupanypswrdvrfksidto:verifikasilupanypswrdvrfksidto) {
//   console.log(verifikasilupanypswrdvrfksidto);
//   return this.appService.verifikasilupanypassword(verifikasilupanypswrdvrfksidto.templatejnsjns, verifikasilupanypswrdvrfksidto.email);
// }























// @Post('emailgntpasswrd')
// async verifikasigntpassword(@Body() data:any) {
//   console.log(data);
//   return this.appService.verifikasigntpassword(data.email);
// }


}

//  @Post()

//  async verifikasi(
//   //
//   @Query('verifikasiregistrasi') enumtemplate:any,
//   @Query('verifikasilogin') enumtmplt:any,
//   @Query('verifikasilupanypassword') enumcount:any,
//   @Query('verifikasigntpassword') enumcounttemplate:any,
//   @Res() res: any,
//   @Req() req: any,


  
// )



// {

   


//   if(req.query == 'verifikasiregistrasi') return res.verifikasiregistrasi()
//   if(req.query == 'verifikasilogin') return res.verifikasilogin()
//   if(req.query == 'verifikasilupanypassword') return res.verifikasilupanypassword()
//   if(req.query == 'verifikasigntpassword') return res.verifikasigntpassword()
  
// }


































































































// @Post('emailregistrasi')
// async verifikasiregistrasi(@Body() data:any ) {
//   console.log(data);
//   return this.appService.verifikasiregistrasi(data.email);
// }

// @Post('emailverifikasi')
// async verifikasilogin(@Body() data:any) {
//   console.log(data);
//   return this.appService.verifikasilogin(data.email);
// }

// @Post('emaillupanypassword')
// async verifikasilupanypassword(@Body() data:any) {
//   console.log(data);
//   return this.appService.verifikasilupanypassword(data.email);
// }

// @Post('emailgntpasswrd')
// async verifikasigntpassword(@Body() data:any) {
//   console.log(data);
//   return this.appService.verifikasigntpassword(data.email);
// }
















  // @Post('emaillengkap')

  // async verifikasiregistrasi(@Body() data:any ) {
  //   console.log(data);
  //   return this.appService.verifikasiregistrasi(data.email);
  // }

  // async verifikasilogin(@Body() data:any) {
  //   console.log(data);
  //   return this.appService.verifikasilogin(data.email);
  // }

  // async verifikasilupanypassword(@Body() data:any) {
  //   console.log(data);
  //   return this.appService.verifikasilupanypassword(data.email);
  // }

  // async verifikasigntpassword(@Body() data:any) {
  //   console.log(data);
  //   return this.appService.verifikasigntpassword(data.email);
  // }
  

 

  // if('verifikasiregistrasi') return this.appService.verifikasiregistrasi(enumtemplateny.email)
  // {
  //   async verifikasiregistrasi(@Body() enumtemplate:any ) {

  //     @Query('verifikasiregistrasi') enumtemplateny:any,
  //     console.log(enumtemplate);
  //     return this.appService.verifikasiregistrasi(enumtemplate.email);
  //   }
  // }
  // if(  'verifikasilogin') return this.appService.verifikasilogin(enumcount.email){
  //   async verifikasilogin(@Body() enumcount:any) {
  //     console.log(enumcount);
  //     return this.appService.verifikasilogin(enumcount.email);
  //   }
  // }
  // if( 'verifikasilupanypassword') return this.appService.verifikasilupanypassword(enumcounttemplateny.email)
  // {
  //   async verifikasilupanypassword(@Body() enumcounttemplateny:any) {
  //     console.log(enumcounttemplateny);
  //     return this.appService.verifikasilupanypassword(enumcounttemplateny.email);
  //   }
  
  // }
  // if( 'verifikasigntpassword') return this.appService.verifikasigntpassword(enumcounttmplt.email){
  //   async verifikasigntpassword(@Body() enumcounttmplt ) {
  //     console.log(enumcounttmplt);
  //     return this.appService.verifikasigntpassword(enumcounttmplt.email);
  //   }
  
  // }

  // async verifikasiregistrasi(@Body() enumtemplate:any ) {

  //   @Query('verifikasiregistrasi') enumtemplateny:any,
  //   console.log(enumtemplate);
  //   return this.appService.verifikasiregistrasi(enumtemplate.email);
  // }

  // async verifikasilogin(@Body() enumcount:any) {
  //   console.log(enumcount);
  //   return this.appService.verifikasilogin(enumcount.email);
  // }


  // async verifikasilupanypassword(@Body() enumcounttemplateny:any) {
  //   console.log(enumcounttemplateny);
  //   return this.appService.verifikasilupanypassword(enumcounttemplateny.email);
  // }

  // async verifikasigntpassword(@Body() enumcounttmplt ) {
  //   console.log(enumcounttmplt);
  //   return this.appService.verifikasigntpassword(enumcounttmplt.email);
  // }

  
 
  


    
 
  // @Post()
  // async verifikasi(@Query('verifikasiregistrasi', 'verifikasilogin', 
  // 'verifikasilupanypassword', 'verifikasigntpassword')  enumtemplateny:any ) 

  //   if(req.user.role !== 'ADMIN') res.redirect('/login')
  //       if (!paginatePage || !paginatePage) {
  //         return res.redirect(`/admin/daerah/list${queryPage(1, 10)}`)
  //       }
  //       const list = await this.daerahService.findAllDaerah({
  //         page: +paginatePage || 1,
  //         size: +paginateSize || 10
  //       })
  //       const total = await this.daerahService.count()
  //       const results = {
  //         user: req.user,
  //         list: list,
  //         paginations: generatePaginationLink(total, +paginatePage, +paginateSize, '/admin/daerah/list')
  //       }
  //       return results
  //     }
  //   console.log(enumtemplateny.email);
  //   return this.appService.verifikasi(enumtemplateny.email);
  // }

//   @Controller('admin/daerah')
// export class AdminDaerahController {
//   constructor(
//     private daerahService: DaerahService
//   ) { } DestinasiCreateInput

//   @UseGuards(AuthenticatedGuard)
//   @Get('list')
//   @Render('admin/daerah/list')
//   async listDaerah(
//     @Query('page') paginatePage: string,
//     @Query('size') paginateSize: string,
//     @Res() res: Response,
//     @Req() req: any
//   ) {
//     if(req.user.role !== 'ADMIN') res.redirect('/login')
//     if (!paginatePage || !paginatePage) {
//       return res.redirect(`/admin/daerah/list${queryPage(1, 10)}`)
//     }
//     const list = await this.daerahService.findAllDaerah({
//       page: +paginatePage || 1,
//       size: +paginateSize || 10
//     })
//     const total = await this.daerahService.count()
//     const results = {
//       user: req.user,
//       list: list,
//       paginations: generatePaginationLink(total, +paginatePage, +paginateSize, '/admin/daerah/list')
//     }
//     return results
//   }

  // @Post('emailregistrasi')
  // async verifikasiregistrasi(@Body() data:any ) {
  //   console.log(data);
  //   return this.appService.verifikasi( data.email);
  // }

  // @Post('emailverifikasi')
  // async verifikasilogin(@Body() data:any) {
  //   console.log(data);
  //   return this.appService.verifikasilogin(data.email);
  // }

  // @Post('emaillupanypassword')
  // async verifikasilupanypassword(@Body() data:any) {
  //   console.log(data);
  //   return this.appService.verifikasilupanypassword(data.email);
  // }

  // @Post('emailgntpasswrd')
  // async verifikasigntpassword(@Body() data:any) {
  //   console.log(data);
  //   return this.appService.verifikasigntpassword(data.email);
  // }

