import PropTypes from 'prop-types';
import React from 'react';
import { ViewProps } from 'react-native';
declare type BarCodeEvent = {
    type: string;
    data: string;
    [key: string]: any;
};
export declare type BarCodeEventCallbackArguments = {
    nativeEvent: BarCodeEvent;
};
export declare type BarCodeReadCallback = (params: BarCodeEvent) => void;
export declare type BarCodeScannedCallback = (params: BarCodeEventCallbackArguments) => void;
export interface BarCodeScannerProps extends ViewProps {
    type?: 'front' | 'back' | number;
    torchMode?: 'on' | 'off';
    barCodeTypes?: string[];
    onBarCodeRead?: BarCodeReadCallback;
    onBarCodeScanned: BarCodeScannedCallback;
}
declare type AnyComponent = null | React.Component<any, any> | React.ComponentClass<any>;
export declare class BarCodeScanner extends React.Component<BarCodeScannerProps> {
    lastEvents: {
        [key: string]: any;
    };
    lastEventsTimes: {
        [key: string]: any;
    };
    barCodeScannerRef: AnyComponent;
    barCodeScannerHandle: null | number;
    static Constants: {
        BarCodeType: any;
        Type: any;
    };
    static ConversionTables: {
        type: any;
    };
    static propTypes: {
        onBarCodeScanned: PropTypes.Requireable<(...args: any[]) => any>;
        barCodeTypes: PropTypes.Requireable<any[]>;
        type: PropTypes.Requireable<React.ReactText>;
        hitSlop?: PropTypes.Validator<import("react-native").Insets | undefined> | undefined;
        onLayout?: PropTypes.Validator<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
        pointerEvents?: PropTypes.Validator<"box-none" | "none" | "box-only" | "auto" | undefined> | undefined;
        removeClippedSubviews?: PropTypes.Validator<boolean | undefined> | undefined;
        style?: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        testID?: PropTypes.Validator<string | undefined> | undefined;
        nativeID?: PropTypes.Validator<string | undefined> | undefined;
        collapsable?: PropTypes.Validator<boolean | undefined> | undefined;
        needsOffscreenAlphaCompositing?: PropTypes.Validator<boolean | undefined> | undefined;
        renderToHardwareTextureAndroid?: PropTypes.Validator<boolean | undefined> | undefined;
        accessibilityViewIsModal?: PropTypes.Validator<boolean | undefined> | undefined;
        accessibilityActions?: PropTypes.Validator<string[] | undefined> | undefined;
        onAccessibilityAction?: PropTypes.Validator<(() => void) | undefined> | undefined;
        shouldRasterizeIOS?: PropTypes.Validator<boolean | undefined> | undefined;
        onStartShouldSetResponder?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onMoveShouldSetResponder?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onResponderEnd?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderGrant?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderReject?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderMove?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderRelease?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderStart?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderTerminationRequest?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onResponderTerminate?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onStartShouldSetResponderCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onMoveShouldSetResponderCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onTouchStart?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchMove?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchEnd?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchCancel?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchEndCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        accessible?: PropTypes.Validator<boolean | undefined> | undefined;
        accessibilityLabel?: PropTypes.Validator<string | undefined> | undefined;
        accessibilityRole?: PropTypes.Validator<"none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "header" | "summary" | "imagebutton" | undefined> | undefined;
        accessibilityStates?: PropTypes.Validator<import("react-native").AccessibilityState[] | undefined> | undefined;
        accessibilityHint?: PropTypes.Validator<string | undefined> | undefined;
        accessibilityComponentType?: PropTypes.Validator<"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
        accessibilityLiveRegion?: PropTypes.Validator<"none" | "polite" | "assertive" | undefined> | undefined;
        importantForAccessibility?: PropTypes.Validator<"auto" | "yes" | "no" | "no-hide-descendants" | undefined> | undefined;
        accessibilityElementsHidden?: PropTypes.Validator<boolean | undefined> | undefined;
        accessibilityTraits?: PropTypes.Validator<"none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
        onAccessibilityTap?: PropTypes.Validator<(() => void) | undefined> | undefined;
        onMagicTap?: PropTypes.Validator<(() => void) | undefined> | undefined;
        accessibilityIgnoresInvertColors?: PropTypes.Validator<boolean | undefined> | undefined;
    };
    static defaultProps: {
        type: any;
        barCodeTypes: {}[];
    };
    static scanFromURLAsync(url: string, barCodeTypes: string[]): Promise<{
        type: string;
        data: string;
    }>;
    render(): JSX.Element;
    setReference: (ref: AnyComponent) => void;
    onObjectDetected: (callback?: ((params: any) => void) | undefined) => ({ nativeEvent, }: BarCodeEventCallbackArguments) => void;
    convertNativeProps(props: BarCodeScannerProps): any;
    convertProp(value: any, key: string): any;
}
export declare const Constants: {
    BarCodeType: any;
    Type: any;
};
export {};
