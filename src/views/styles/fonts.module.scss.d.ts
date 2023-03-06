/**
 * the type for all the weight scss variables exported from fonts.module.scss
 */
export interface IWeights {
    light_weight: number;
    regular_weight: number;
    normal_weight: number;
    bold_weight: number;
    semi_bold_weight: number;
    black_weight: number;
}

/**
 * the type for all the size scss variables exported from fonts.module.scss
 */
export interface ISizes {
    x_small_size: number;
    small_size: number;
    medium_size: number;
    large_size: number;
    x_large_size: number;
    xx_large_size: number;
}

/**
 * the type for all the line height scss variables exported from fonts.module.scss
 */
export interface LineHeight {
    x_small_line_height: number;
    small_line_height: number;
    medium_line_height: number;
    large_line_height: number;
    x_large_line_height: number;
    xx_large_line_height: number;
}

/** A utility type that removes the _weight postfix from the variable names for weights */
export type Weight = keyof IWeights extends `${infer U}_weight` ? U : never;

/** A utility type that removes the _size postfix from the variable names for sizes */
export type Size = keyof ISizes extends `${infer U}_size` ? U : never;

/**
 * This is a file that we need to create to tell typescript what the shape of the css modules is
 * when we import them into ts/tsx files
 */
export type IFonts = IWeights & ISizes & LineHeight;

declare const fonts: IFonts;
export default fonts;
