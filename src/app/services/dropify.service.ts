import { Injectable } from '@angular/core';
declare var $;

@Injectable({
  providedIn: 'root'
})
export class DropifyService {
  dropify: any;
  constructor() { }

  construirComponenteDropify(id: string = ''): void {
    console.log(id);
    if (id) {
      const idJquery = `#${id}`;
      this.dropify = $(idJquery).dropify({
        messages: {
          default: 'Arrastre un fichero o de clic',
          replace: 'Arrastre y suelte un archivo o haga clic para reemplazar',
          remove: 'Eliminar',
          error: 'Ooops, fichero no valido',
        },
          error: {
          fileSize: 'El fichero es muy grande ({{ value }} max).',
          minWidth: 'The image width is too small ({{ value }}}px min).',
          maxWidth: 'The image width is too big ({{ value }}}px max).',
          minHeight: 'The image height is too small ({{ value }}}px min).',
          maxHeight: 'The image height is too big ({{ value }}px max).',
          imageFormat: 'The image format is not allowed ({{ value }} only).'
        }
      });
    } else {
      this.dropify  =  $('.dropify').dropify({
        messages: {
          default: 'Arrastre un fichero o de clic',
          replace: 'Arrastre y suelte un archivo o haga clic para reemplazar',
          remove: 'Eliminar',
          error: 'Ooops, fichero no valido',
        }
      });
    }
    return this.dropify ;
  }

  buildComponentDropify(id: string = ''): void {
    if (id) {
      const idJquery = `#${id}`;
      this.dropify = $(idJquery).dropify({
        messages: {
          default: 'Drag a file or click',
          replace: 'Drag and drop a file or click to replace',
          remove: 'Delete',
          error: 'Ooops, invalid file',
        },
        error: {
          fileSize: 'The file is very large ({{ value }} max).',
          minWidth: 'The image width is too small ({{ value }}}px min).',
          maxWidth: 'The image width is too big ({{ value }}}px max).',
          minHeight: 'The image height is too small ({{ value }}}px min).',
          maxHeight: 'The image height is too big ({{ value }}px max).',
          imageFormat: 'The image format is not allowed ({{ value }} only).',
          fileExtension: 'The allowed extensions are ({{ value }}).',
        }
      });
    } else {
      this.dropify = $('.dropify').dropify({
        messages: {
          default: 'Drag a file or click',
          replace: 'Drag and drop a file or click to replace',
          remove: 'Delete',
          error: 'Ooops, invalid file',
        }
      });
    }
    return this.dropify;
  }

  eliminarFichero(): void {
    // limpiarDropify();
    // this.dropify.on('dropify.afterClear', function (event, element) {
    //  alert('File deleted');
    // });
  }

  resetDropy(id: string = ''): void {}
}
