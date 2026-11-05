import type * as React from 'react';

export type IconName = 'sparkles' | 'mic' | 'help' | 'signal' | 'battery' | 'batteryLow' | 'lightning' | 'alert' | 'ban' | 'check' | 'checkCircle' | 'wifiOff' | 'clock' | 'message' | 'shelter' | 'arrowRight' | 'arrowUp' | 'arrowDown' | 'chevronLeft' | 'chevronRight' | 'cart' | 'walk' | 'phone' | 'lock' | 'plug' | 'search' | 'nfc' | 'volume' | 'food' | 'music' | 'mapPinOff' | 'x' | 'send' | 'keyboard' | 'flag' | 'lifebuoy' | 'plus' | 'minus' | 'droplet' | 'play' | 'pause' | 'skipBack' | 'skipForward';

export interface IconProps { name: IconName; size?: number; strokeWidth?: number; label?: string; className?: string; style?: React.CSSProperties }
export declare function Icon(props: IconProps): React.ReactElement;

export interface DeviceFrameProps { theme?: 'day' | 'dusk'; children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function DeviceFrame(props: DeviceFrameProps): React.ReactElement;

export interface CourseMarkProps { monogram: string; accent?: string; onAccent?: string; size?: number; label?: string }
export declare function CourseMark(props: CourseMarkProps): React.ReactElement;

export interface CartHeaderProps { title: string; meta?: string; monogram?: string; course?: string; accent?: string; onAccent?: string; back?: boolean; onBack?: () => void; battery?: number; offline?: boolean; device?: string; right?: React.ReactNode }
export declare function CartHeader(props: CartHeaderProps): React.ReactElement;

/** The dock. Ask Bob sits raised in the centre: onTalk on tap (open chat), onHoldStart on press (start listening). */
export interface BottomBarProps { items?: 'mvp' | 'full'; active?: 'hole' | 'bob' | 'food' | 'music' | 'help'; onHole?: () => void; onTalk?: () => void; onHoldStart?: () => void; onFood?: () => void; onMusic?: () => void; onHelp?: () => void }
export declare function BottomBar(props: BottomBarProps): React.ReactElement;

export interface ButtonProps { variant?: 'primary' | 'secondary' | 'onalert' | 'onalert-ghost'; block?: boolean; pill?: boolean; icon?: IconName; disabled?: boolean; type?: 'button' | 'submit'; onClick?: () => void; children?: React.ReactNode; 'aria-label'?: string; className?: string; style?: React.CSSProperties }
export declare function Button(props: ButtonProps): React.ReactElement;

export interface IconButtonProps { icon: IconName; label: string; size?: 'md' | 'sm'; variant?: 'surface' | 'map'; onClick?: () => void; className?: string; style?: React.CSSProperties }
export declare function IconButton(props: IconButtonProps): React.ReactElement;

export interface YardageReadoutProps { front: number | string; middle: number | string; back: number | string; unit?: 'yds' | 'm' }
export declare function YardageReadout(props: YardageReadoutProps): React.ReactElement;

export interface MapPoint { x: number; y: number }
/** Coordinates are in the 328 x 412 map space, green at the top, tee at the bottom. */
export interface HoleMapProps {
  /** Aerial photo of the hole, rotated tee-to-green and cropped to 328:412. Without it the component draws an aerial-style stand-in. */
  image?: string;
  /** Small source line drawn bottom-left, e.g. "Imagery: USGS NAIP". */
  credit?: string;
  pin?: MapPoint; me?: MapPoint; tapAt?: MapPoint;
  zone?: boolean; zonePath?: string; zoneLabelAt?: MapPoint; zoneLabel?: string; inZone?: boolean;
  walker?: boolean; tap?: string; hazards?: { text: string; x: number; y: number }[]; nav?: boolean; height?: number; label?: string;
}
export declare function HoleMap(props: HoleMapProps): React.ReactElement;

export interface StatusTagProps { tone?: 'neutral' | 'brand' | 'go' | 'confirmed' | 'warning' | 'lightning' | 'zone'; icon?: IconName | false; children?: React.ReactNode }
export declare function StatusTag(props: StatusTagProps): React.ReactElement;

export interface BobAvatarProps { size?: number; onAccent?: boolean }
export declare function BobAvatar(props: BobAvatarProps): React.ReactElement;

export interface ChatBubbleProps { from?: 'bob' | 'golfer'; showName?: boolean; children?: React.ReactNode }
export declare function ChatBubble(props: ChatBubbleProps): React.ReactElement;

export interface MicButtonProps { state?: 'ready' | 'listening'; label?: string; onClick?: () => void }
export declare function MicButton(props: MicButtonProps): React.ReactElement;

export interface AnswerCardProps { question?: string; headline: string; spoken?: boolean; children?: React.ReactNode }
export declare function AnswerCard(props: AnswerCardProps): React.ReactElement;

export interface PromptChipProps { icon?: IconName; onClick?: () => void; children?: React.ReactNode; className?: string }
export declare function PromptChip(props: PromptChipProps): React.ReactElement;

/** The chat bar on every Bob screen. Empty field: the round button is the mic. With text: it is Send. */
export interface ComposerProps { value?: string; placeholder?: string; locked?: boolean; lockedHint?: string; listening?: boolean; onSend?: (text: string) => void; onVoice?: () => void }
export declare function Composer(props: ComposerProps): React.ReactElement;

export interface BannerProps { tone?: 'offline' | 'suspended' | 'clear' | 'zone' | 'battery'; children?: React.ReactNode }
export declare function Banner(props: BannerProps): React.ReactElement;

export interface AlertSheetProps { tone?: 'pace' | 'message' | 'zone' | 'battery' | 'exited'; overline?: string; title: string; action?: string; actionVariant?: 'primary' | 'secondary'; onAction?: () => void; autoDismiss?: string; children?: React.ReactNode }
export declare function AlertSheet(props: AlertSheetProps): React.ReactElement;

export interface AlertTakeoverProps { kind?: 'lightning' | 'zone' | 'clear'; title: string; message?: string; detail?: React.ReactNode; detailIcon?: IconName; icon?: IconName; footnote?: string; action?: string; onAction?: () => void; flash?: boolean; escalated?: string; escalatedDetail?: string }
export declare function AlertTakeover(props: AlertTakeoverProps): React.ReactElement;

export interface QRPanelProps { title?: string; hint?: string; size?: number }
export declare function QRPanel(props: QRPanelProps): React.ReactElement;

export interface ChoiceCardProps { icon: IconName; title: string; description?: string; selected?: boolean; onSelect?: () => void }
export declare function ChoiceCard(props: ChoiceCardProps): React.ReactElement;

export interface GolferRowProps { name: string; initials?: string; status?: string; tone?: StatusTagProps['tone'] }
export declare function GolferRow(props: GolferRowProps): React.ReactElement;

export interface MenuItemProps { name: string; price: string; description?: string; image?: string; icon?: IconName; tag?: string; qty?: number; onAdd?: () => void; onRemove?: () => void }
export declare function MenuItem(props: MenuItemProps): React.ReactElement;
export interface CategoryTabsProps { items: { id: string; label: string }[]; active?: string; onChange?: (id: string) => void; label?: string }
export declare function CategoryTabs(props: CategoryTabsProps): React.ReactElement;
export interface QuantityStepperProps { value: number; label?: string; onIncrease?: () => void; onDecrease?: () => void }
export declare function QuantityStepper(props: QuantityStepperProps): React.ReactElement;

export interface KeypadProps { filled?: number; length?: number; onKey?: (key: string) => void }
export declare function Keypad(props: KeypadProps): React.ReactElement;

declare global {
  interface Window {
    TeemeupCart: {
      Icon: typeof Icon; iconNames: IconName[]; DeviceFrame: typeof DeviceFrame; CourseMark: typeof CourseMark; CartHeader: typeof CartHeader;
      BottomBar: typeof BottomBar; Button: typeof Button; IconButton: typeof IconButton; YardageReadout: typeof YardageReadout; HoleMap: typeof HoleMap;
      StatusTag: typeof StatusTag; BobAvatar: typeof BobAvatar; ChatBubble: typeof ChatBubble; MicButton: typeof MicButton; AnswerCard: typeof AnswerCard; PromptChip: typeof PromptChip; Composer: typeof Composer;
      Banner: typeof Banner; AlertSheet: typeof AlertSheet; AlertTakeover: typeof AlertTakeover; QRPanel: typeof QRPanel; ChoiceCard: typeof ChoiceCard;
      GolferRow: typeof GolferRow; Keypad: typeof Keypad; MenuItem: typeof MenuItem; CategoryTabs: typeof CategoryTabs; QuantityStepper: typeof QuantityStepper;
    };
  }
}
