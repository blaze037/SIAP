import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class AppSettings {
  public static API_URL = 'https://project.cydev.biz.id/siap/api/';
  private static HTTP_XAPPS = 'siap-app';
  private static HTTP_XBEARER = '%9dk3@(%gkFSNsjdasjsd@%9Rasjsd#$%^as&^haT@';
  public static APP_URL = '';
  public static TIMEOUT = 30000;
  private static sanitizer: DomSanitizer;
  public static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'XAPPS' : this.HTTP_XAPPS,
      'XTOKEN' : this.HTTP_XBEARER
      })
  };
  public static httpOptionsUser(member:string,token:string){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'XAPPS' : this.HTTP_XAPPS,
        'XTOKEN' : this.HTTP_XBEARER,
        'APP_MEMBER' : member,
        'APP_XTOKEN': token
        })
    };
  }
  constructor(private sanitizer: DomSanitizer) {
    AppSettings.sanitizer = sanitizer;
  }

  public static formatDate(date:any) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('-');
  }
  public static dateFormat(tgl:any){
    let month=[
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
    ];
    tgl = tgl.split("-");
    return tgl[2]+" "+month[tgl[1]-1]+" "+tgl[0];
  }

  public static getBase64ImageSrc(base64Data: string): SafeResourceUrl {
    const imageUrl = 'data:image/jpeg;base64,' + base64Data;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }

  public static formatMoney(amount: number): string {
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  }

}
