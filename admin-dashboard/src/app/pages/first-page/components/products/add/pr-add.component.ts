import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: 'app-pr-add',
    templateUrl: './pr-add.component.html',
    styleUrls: ['./pr-add.component.scss']
})
export class AddComponent implements OnInit {

    @ViewChild('lbl') label: ElementRef;
    @ViewChild('imageRow') imageRow: ElementRef;

    imagesUrlList = []; // to preview
    imagesFileList = []; // sends to api
    MainImage = 0;

    // Forms
    $setting = new FormGroup({
        newCategory: new FormControl('')
    });
    $details = new FormGroup({});
    $product = new FormGroup({});

    constructor() { }

    ngOnInit(): void {
        
    }

    addedNewFile(evnt: HTMLInputEvent): void {
        const target = this.label.nativeElement as HTMLLabelElement;
        const file = evnt.target.files[0];
        // const fileUrl = URL.createObjectURL(file);

        const reader = new FileReader();
        reader.onload = e => this.imagesUrlList.push(e.target.result);
        if (file !== undefined) {
            reader.readAsDataURL(file);
        }

        this.imagesFileList.push(file);
    }

    setDeafulat(imageIndex: number): void {
        this.MainImage = imageIndex;
        const DivElemnt = this.imageRow.nativeElement as HTMLDivElement;
        const child = DivElemnt.childNodes as NodeListOf<HTMLImageElement>;

        for (let inx = 0; inx < child.length - 1; inx++) {
            child[inx].style.border = '0px solid transparent';
        }
        child[imageIndex].style.borderTop = '4px solid #8c1fca';
        child[imageIndex].style.borderRight = '4px solid #8c1fca';
        child[imageIndex].style.borderBottom = '4px solid #8f12a2';
        child[imageIndex].style.borderLeft = '4px solid #8f12a2';
    }

    deleteImage(imageIndex: number): false {
        const DivElemnt = this.imageRow.nativeElement as HTMLDivElement;
        const el = DivElemnt.childNodes[imageIndex] as HTMLImageElement;
        el.style.transform = 'scale(0)';
        el.style.opacity = '0';

        setTimeout(() => {
            DivElemnt.removeChild(DivElemnt.children[imageIndex]);
            this.imagesFileList.splice(imageIndex, 1);
            this.imagesUrlList.splice(imageIndex, 1);
        }, 300);

        return false;
    }

    addCategory(): void {
        // TODO: get value
        // TODO: send to data base
        // TODO: Update



    }
}
