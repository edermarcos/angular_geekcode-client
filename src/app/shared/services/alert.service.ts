import { Injectable } from '@angular/core';
import swal, { SweetAlertType } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public basicAlert(text: string) {
    return swal(text);
  }

  public alert(type: SweetAlertType, title: string, text: string) {
    return swal({
      title,
      type,
      text,
      allowOutsideClick: false,
    });
  }

  public confirmAlert(type: SweetAlertType, title: string, text: string, confirmButtonText: string, cancelButtonText: string) {
    return swal({
      title,
      type,
      html: text,
      showCloseButton: true,
      showCancelButton: true,
      allowOutsideClick: false,
      focusConfirm: false,
      confirmButtonText:
        `<span>${ confirmButtonText } <i class="fas fa-thumbs-up ml-2"></i></span>`,
      cancelButtonText:
        `<span><i class="fas fa-thumbs-down mr-2"></i> ${ cancelButtonText }</span>`,
    });
  }

  public toast(type: SweetAlertType, title: string) {
    const toast = swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3500
    });

    toast({
      type,
      title
    });
  }
}
