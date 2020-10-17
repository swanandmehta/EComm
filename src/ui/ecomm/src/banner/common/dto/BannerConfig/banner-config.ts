import { BannerTextPosition } from '../../enum/BannerTextPosition/banner-text-position.enum';

export class BannerConfig {
    src : string;
    height ?: string = "100%";
    width ?: string = "100%";
    btnText ?: string = null;
    btnSrc ?: string = null;
    headerText ?: string = null;
    position ?: BannerTextPosition = BannerTextPosition.CENTER;
    showNav : boolean = true;
    autoSlide : boolean = true;

    constructor(src: string, showNav: boolean, autoSlide: boolean) {
        this.src = src;
        this.showNav = showNav;
        this.autoSlide = autoSlide;
    }
}
