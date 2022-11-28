
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { template } from 'handlebars';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) { }
  
  public verifikasi( jnsjnstmpltemail:any , email:any ): void {

    // const jnsjnstmpltemail = ['verifkasiregistrasi','verifikasilogin' , 'verifikasilupanypassword' , 'verifikasigntpassword'];
    // const verifikasi = ['verifkasiregistrasi','verifikasilogin' , 'verifikasilupanypassword' , 'verifikasigntpassword'];
 

    if(jnsjnstmpltemail == 'verifikasiregistrasi')
    {

      this.mailerService
      .sendMail({
        to: email, // list of receivers
        from: 'atya89999@gmail.com', // sender address
        subject: 'Verifikasi registrasi ', // Subject line
        text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
        html: '<b> Selamat datang, anda berhasil registrasi <br/><img src=https://magdalene.co/storage/media/Doraemon3%20copy.jpg/></b>' // HTML body content
      })
      .then(() => {
        console.log("email berhasil registrasi terkirim");
        
      })
      .catch((e) => {
        console.log(e);
      });
   
      // this
      // .mailerService
      // .sendMail({
      //   to: email, // List of receivers email address
      //   from: 'atya89999@gmail.com', // Senders email address
      //   subject: 'verifikasi registrasi',
      //   template: './template/verifkasiregistrasi', // The `.pug` or `.hbs` extension is appended automatically.
      //   context: {  // Data to be sent to template engine.
      //     emailclient: email,
      //   },
      // })
      // .then(() => {
      //   console.log('email verifikasi registrasi berhasil terkirim')
      // })
      // .catch((err) => {
      //   console.log(err)
      // });
  }else if (jnsjnstmpltemail == 'verifikasilogin'){

    this.mailerService
      .sendMail({
        to: email, // list of receivers
        from: 'atya89999@gmail.com', // sender address
        subject: 'Verifikasi login ', // Subject line
        text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
        html: '<b> Selamat datang, anda berhasil login <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
      })
      .then(() => {
        console.log("email verifikasi terkirim");
        
      })
      .catch((e) => {
        console.log(e);
      });

      //   this
      // .mailerService
      // .sendMail({
      //   to: email,
      //   from: 'atya89999@gmail.com',
      //   subject: 'verifikasi login',
      //   template: './template/verifikasilogin', // The `.pug` or `.hbs` extension is appended automatically.
      //   context: {  // Data to be sent to template engine.
      //     emailclient: email,
      //   },
      // })
      // .then(() => {
      //   console.log('email verifikasi login berhasil terkirim')
      // })
      // .catch((err) => {
      //   console.log(err)
      // });

  }else if (jnsjnstmpltemail == 'verifikasilupanypassword'){

    this.mailerService
      .sendMail({
        to: email, // list of receivers
        from: 'atya89999@gmail.com', // sender address
        subject: 'Verifikasi lupa password ', // Subject line
        text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
        html: '<b> Selamat datang, kami menginformasikan bahwa anda akan mengganti password <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
      })
      .then(() => {
        console.log("email lupa password terkirim");
        
      })
      .catch((e) => {
        console.log(e);
      });

      //   this
      // .mailerService
      // .sendMail({
      //   to: email,
      //   from: 'atya89999@gmail.com',
      //   subject: 'verifikasi lupa password',
      //   template:  './template/verifikasilupanypassword', // The `.pug` or `.hbs` extension is appended automatically.
      //   context: {  // Data to be sent to template engine.
      //     emailclient: email,
      //   },
      // })
      // .then(() => {
      //   console.log('email verifikasi lupa password berhasil terkirim')
      // })
      // .catch((err) => {
      //   console.log(err)
      // });

  }else if (jnsjnstmpltemail == 'verifikasigntpassword'){

    this.mailerService
      .sendMail({
        to: email, // list of receivers
        from: 'atya89999@gmail.com', // sender address
        subject: 'Verifikasi ganti password ', // Subject line
        text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
        html: '<b> Selamat datang, kami menginformasikan bahwa anda telah mengganti password  <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
      })
      .then(() => {
        console.log("email ganti password terkirim");
        
      })
      .catch((e) => {
        console.log(e);
      });

      //   this
      // .mailerService
      // .sendMail({S
      //   to: email,
      //   from: 'atya89999@gmail.com',
      //   subject: 'verifikasi ganti password',
      //   template: './template/verifikasigntpassword', // The `.pug` or `.hbs` extension is appended automatically.
      //   context: {  // Data to be sent to template engine.
      //     emailclient: email,
      //   },
      // })
      // .then(() => {
      //   console.log('email verifikasi ganti password berhasil terkirim')
      // })
      // .catch((err) => {
      //   console.log(err)
      // });

  }
}






















































































































// public MailSrvce(email:string): void {
//   this.mailerService
//     .sendMail({
//       to: email, // list of receivers
//       from: 'atya89999@gmail.com', // sender address
//       subject: 'Verifikasi registrasi ', // Subject line
//       text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
//       html: '<b> Selamat datang, anda berhasil registrasi <br/><img src=https://magdalene.co/storage/media/Doraemon3%20copy.jpg/></b>' // HTML body content
//     })
//     .then(() => {
//       console.log("email berhasil registrasi terkirim");
      
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

// public EmailVerifikasi(email:string): void {
//   this.mailerService
//     .sendMail({
//       to: email, // list of receivers
//       from: 'atya89999@gmail.com', // sender address
//       subject: 'Verifikasi login ', // Subject line
//       text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
//       html: '<b> Selamat datang, anda berhasil login <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
//     })
//     .then(() => {
//       console.log("email verifikasi terkirim");
      
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

// public EmailLupaPassword(email:string): void {
//   this.mailerService
//     .sendMail({
//       to: email, // list of receivers
//       from: 'atya89999@gmail.com', // sender address
//       subject: 'Verifikasi lupa password ', // Subject line
//       text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
//       html: '<b> Selamat datang, kami menginformasikan bahwa anda akan mengganti password <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
//     })
//     .then(() => {
//       console.log("email lupa password terkirim");
      
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

// public EmailGntPasswrd(email:string): void {
//   this.mailerService
//     .sendMail({
//       to: email, // list of receivers
//       from: 'atya89999@gmail.com', // sender address
//       subject: 'Verifikasi ganti password ', // Subject line
//       text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
//       html: '<b> Selamat datang, kami menginformasikan bahwa anda telah mengganti password  <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
//     })
//     .then(() => {
//       console.log("email ganti password terkirim");
      
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }











  //   public verifikasiregistrasi(email:string): void {
  //   this
  //     .mailerService
  //     .sendMail({
  //       to: email, // List of receivers email address
  //       from: 'atya89999@gmail.com', // Senders email address
  //       subject: 'verifikasi registrasi',
  //       template: 'verifikasiregistrasi', // The `.pug` or `.hbs` extension is appended automatically.
  //       context: {  // Data to be sent to template engine.
  //         emailclient: email,
  //       },
  //     })
  //     .then(() => {
  //       console.log('email verifikasi registrasi berhasil terkirim')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }

  // public verifikasilogin( email:string): void {
  //   this
  //     .mailerService
  //     .sendMail({
  //       to: email,
  //       from: 'atya89999@gmail.com',
  //       subject: 'verifikasi login',
  //       template: 'verifikasilogin', // The `.pug` or `.hbs` extension is appended automatically.
  //       context: {  // Data to be sent to template engine.
  //         emailclient: email,
  //       },
  //     })
  //     .then(() => {
  //       console.log('email verifikasi login berhasil terkirim')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }

  // public verifikasilupanypassword(email:string): void {
  //   this
  //     .mailerService
  //     .sendMail({
  //       to: email,
  //       from: 'atya89999@gmail.com',
  //       subject: 'verifikasi lupa password',
  //       template:  'verifikasilupanypassword', // The `.pug` or `.hbs` extension is appended automatically.
  //       context: {  // Data to be sent to template engine.
  //         emailclient: email,
  //       },
  //     })
  //     .then(() => {
  //       console.log('email verifikasi lupa password berhasil terkirim')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }

  // public verifikasigntpassword(email:string): void {
  //   this
  //     .mailerService
  //     .sendMail({
  //       to: email,
  //       from: 'atya89999@gmail.com',
  //       subject: 'verifikasi ganti password',
  //       template: 'verifikasigntpassword', // The `.pug` or `.hbs` extension is appended automatically.
  //       context: {  // Data to be sent to template engine.
  //         emailclient: email,
  //       },
  //     })
  //     .then(() => {
  //       console.log('email verifikasi ganti password berhasil terkirim')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }


  // public verifikasiregistrasi(email:string): void {
  //       this
  //         .mailerService
  //         .sendMail({
  //           to: email, // List of receivers email address
  //           from: 'atya89999@gmail.com', // Senders email address
  //           subject: 'verifikasi registrasi',
  //           template: 'verifikasiregistrasi', // The `.pug` or `.hbs` extension is appended automatically.
  //           context: {  // Data to be sent to template engine.
  //             emailclient: email,
  //           },
  //         })
  //         .then(() => {
  //           console.log('email verifikasi registrasi berhasil terkirim')
  //         })
  //         .catch((err) => {
  //           console.log(err)
  //         });
  //     }


  // public verifikasi(email:any): void {

 
  //   templatetemplate = ['verifkasiregistrasi','verifikasilogin' , 'verifikasilupanypassword' , 'verifikasigntpassword'];
 

  //   if(templatetemplate === "verifikasiregistrasi")
  //   {
   
  //     this
  //     .mailerService
  //     .sendMail({
  //       to: email, // List of receivers email address
  //       from: 'atya89999@gmail.com', // Senders email address
  //       subject: 'verifikasi registrasi',
  //       template: 'verifkasiregistrasi', // The `.pug` or `.hbs` extension is appended automatically.
  //       context: {  // Data to be sent to template engine.
  //         emailclient: email,
  //       },
  //     })
  //     .then(() => {
  //       console.log('email verifikasi registrasi berhasil terkirim')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }else if (templatetemplate === 'verifikasilogin'){

  //       this
  //     .mailerService
  //     .sendMail({
  //       to: email,
  //       from: 'atya89999@gmail.com',
  //       subject: 'verifikasi login',
  //       template: 'verifikasilogin', // The `.pug` or `.hbs` extension is appended automatically.
  //       context: {  // Data to be sent to template engine.
  //         emailclient: email,
  //       },
  //     })
  //     .then(() => {
  //       console.log('email verifikasi login berhasil terkirim')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });

  // }else if (templatetemplate === 'verifikasilupanypassword'){

  //       this
  //     .mailerService
  //     .sendMail({
  //       to: email,
  //       from: 'atya89999@gmail.com',
  //       subject: 'verifikasi lupa password',
  //       template:  'verifikasilupanypassword', // The `.pug` or `.hbs` extension is appended automatically.
  //       context: {  // Data to be sent to template engine.
  //         emailclient: email,
  //       },
  //     })
  //     .then(() => {
  //       console.log('email verifikasi lupa password berhasil terkirim')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });

  // }else if (templatetemplate === 'verifikasigntpassword'){

  //       this
  //     .mailerService
  //     .sendMail({
  //       to: email,
  //       from: 'atya89999@gmail.com',
  //       subject: 'verifikasi ganti password',
  //       template: 'verifikasigntpassword', // The `.pug` or `.hbs` extension is appended automatically.
  //       context: {  // Data to be sent to template engine.
  //         emailclient: email,
  //       },
  //     })
  //     .then(() => {
  //       console.log('email verifikasi ganti password berhasil terkirim')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });

  // }

  //   // }else if (templatetemplate === "verifikasilogin"){

  //   // this.verifikasilogin;

  //   // }else if (templatetemplate === "verifikasilupanypassword"){

  //   // this.verifikasilupanypassword;

  //   // }else if (templatetemplate === "verifikasigntpassword"){

  //   // this.verifikasigntpassword;

  //   // }

  // }
  

    // this
    //   .mailerService
    //   .sendMail({
    //     to: email, // List of receivers email address
    //     from: 'atya89999@gmail.com', // Senders email address
    //     subject: 'verifikasi registrasi',
    //     template: {

    //       templatemailer

    //     }, // The `.pug` or `.hbs` extension is appended automatically.
    //     context: {  // Data to be sent to template engine.
    //       emailclient: email,
    //     },
    //   })
    //   .then(() => {
    //     console.log('email verifikasi registrasi berhasil terkirim')
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   });
  }
  
  
//   public verifikasiregistrasi(email:string): void {
//     this
//       .mailerService
//       .sendMail({
//         to: email, // List of receivers email address
//         from: 'atya89999@gmail.com', // Senders email address
//         subject: 'verifikasi registrasi',
//         template: 'verifikasiregistrasi', // The `.pug` or `.hbs` extension is appended automatically.
//         context: {  // Data to be sent to template engine.
//           emailclient: email,
//         },
//       })
//       .then(() => {
//         console.log('email verifikasi registrasi berhasil terkirim')
//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   }

//   public verifikasilogin(email:string): void {
//     this
//       .mailerService
//       .sendMail({
//         to: email,
//         from: 'atya89999@gmail.com',
//         subject: 'verifikasi login',
//         template: 'verifikasilogin', // The `.pug` or `.hbs` extension is appended automatically.
//         context: {  // Data to be sent to template engine.
//           emailclient: email,
//         },
//       })
//       .then(() => {
//         console.log('email verifikasi login berhasil terkirim')
//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   }

//   public verifikasilupanypassword(email:string): void {
//     this
//       .mailerService
//       .sendMail({
//         to: email,
//         from: 'atya89999@gmail.com',
//         subject: 'verifikasi lupa password',
//         template:  'verifikasilupanypassword', // The `.pug` or `.hbs` extension is appended automatically.
//         context: {  // Data to be sent to template engine.
//           emailclient: email,
//         },
//       })
//       .then(() => {
//         console.log('email verifikasi lupa password berhasil terkirim')
//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   }

//   public verifikasigntpassword(email:string): void {
//     this
//       .mailerService
//       .sendMail({
//         to: email,
//         from: 'atya89999@gmail.com',
//         subject: 'verifikasi ganti password',
//         template: 'verifikasigntpassword', // The `.pug` or `.hbs` extension is appended automatically.
//         context: {  // Data to be sent to template engine.
//           emailclient: email,
//         },
//       })
//       .then(() => {
//         console.log('email verifikasi ganti password berhasil terkirim')
//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   }

// }

// import { Injectable } from '@nestjs/common';
// import { MailerService } from '@nestjs-modules/mailer';

// @Injectable()
// export class MailService {
//   constructor(private readonly mailerService: MailerService) {}

//   public MailSrvce(email:string): void {
//     this.mailerService
//       .sendMail({
//         to: email, // list of receivers
//         from: 'atya89999@gmail.com', // sender address
//         subject: 'Verifikasi registrasi ', // Subject line
//         text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
//         html: '<b> Selamat datang, anda berhasil registrasi <br/><img src=https://magdalene.co/storage/media/Doraemon3%20copy.jpg/></b>' // HTML body content
//       })
//       .then(() => {
//         console.log("email berhasil registrasi terkirim");
        
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   public EmailVerifikasi(email:string): void {
//     this.mailerService
//       .sendMail({
//         to: email, // list of receivers
//         from: 'atya89999@gmail.com', // sender address
//         subject: 'Verifikasi login ', // Subject line
//         text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
//         html: '<b> Selamat datang, anda berhasil login <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
//       })
//       .then(() => {
//         console.log("email verifikasi terkirim");
        
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   public EmailLupaPassword(email:string): void {
//     this.mailerService
//       .sendMail({
//         to: email, // list of receivers
//         from: 'atya89999@gmail.com', // sender address
//         subject: 'Verifikasi lupa password ', // Subject line
//         text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
//         html: '<b> Selamat datang, kami menginformasikan bahwa anda akan mengganti password <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
//       })
//       .then(() => {
//         console.log("email lupa password terkirim");
        
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   public EmailGntPasswrd(email:string): void {
//     this.mailerService
//       .sendMail({
//         to: email, // list of receivers
//         from: 'atya89999@gmail.com', // sender address
//         subject: 'Verifikasi ganti password ', // Subject line
//         text: 'Selamat datang ' + email + ' di DCC' , // plaintext body
//         html: '<b> Selamat datang, kami menginformasikan bahwa anda telah mengganti password  <br/><img src="https://magdalene.co/storage/media/Doraemon3%20copy.jpg"/></b>' // HTML body content
//       })
//       .then(() => {
//         console.log("email ganti password terkirim");
        
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

// //   async sendEmailVerification(email: string): Promise<boolean> {   
// //     var model = await this.emailVerificationModel.findOne({ email: email});

// //     if(model && model.emailToken){
// //         let transporter = nodemailer.createTransport({
// //             host: config.mail.host,
// //             port: config.mail.port,
// //             secure: config.mail.secure, // true for 465, false for other ports
// //             auth: {
// //                 user: config.mail.user,
// //                 pass: config.mail.pass
// //             }
// //         });
    
// //         let mailOptions = {
// //           from: '"Company" <' + config.mail.user + '>', 
// //           to: email, // list of receivers (separated by ,)
// //           subject: 'Verify Email', 
// //           text: 'Verify Email', 
// //           html: 'Registration <br><br> Thanks for your registration<br><br>'+
// //           '<a href='+ config.host.url + ':' + config.host.port +'/auth/email/verify/'+ model.emailToken + '>Click here to activate your account</a>'  // html body
// //         };
    
// //         var sent = await new Promise<boolean>(async function(resolve, reject) {
// //           return await transporter.sendMail(mailOptions, async (error, info) => {
// //               if (error) {      
// //                 console.log('Message sent: %s', error);
// //                 return reject(false);
// //               }
// //               console.log('Message sent: %s', info.messageId);
// //               resolve(true);
// //           });      
// //         })

// //         return sent;
// //     } else {
// //       throw new HttpException('REGISTER.USER_NOT_REGISTERED', HttpStatus.FORBIDDEN);
// //     }
// //   }

// }