import { MainCategoryOption } from '../../dto/MainCategoryOption/main-category-option';
import { SocialOption } from '../../dto/SocialOption/social-option';
import { SubCategoryOption } from '../../dto/SubCategoryOption/sub-category-option';

export interface SidebarConfig {
    showCloseIcon: boolean;
    showCategoryOption: boolean;
    showExtraOption: boolean;
    showSocialOption: boolean;
    category: Array<MainCategoryOption>;
    extra: Array<SubCategoryOption>;
    social: Array<SocialOption>
}
