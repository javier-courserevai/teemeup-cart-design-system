import type * as React from 'react';

export type IconName = 'sparkles' | 'mic' | 'help' | 'signal' | 'battery' | 'batteryLow' | 'lightning' | 'alert' | 'ban' | 'check' | 'checkCircle' | 'wifiOff' | 'clock' | 'message' | 'shelter' | 'arrowRight' | 'arrowUp' | 'arrowDown' | 'arrowLeft' | 'chevronLeft' | 'chevronRight' | 'cart' | 'walk' | 'phone' | 'lock' | 'plug' | 'search' | 'nfc' | 'volume' | 'food' | 'music' | 'mapPinOff' | 'x' | 'send' | 'keyboard' | 'flag' | 'lifebuoy' | 'plus' | 'minus' | 'droplet' | 'play' | 'pause' | 'skipBack' | 'skipForward' | 'golf' | 'grid';

/** Phosphor, Bold by default; weight 'fill' for Bob, active states and safety icons. strokeWidth is ignored (kept for older call sites). */
export interface IconProps { name: IconName; size?: number; weight?: 'bold' | 'fill'; strokeWidth?: number; label?: string; className?: string; style?: React.CSSProperties }
export declare function Icon(props: IconProps): React.ReactElement;

export interface DeviceFrameProps { theme?: 'day' | 'dusk'; children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function DeviceFrame(props: DeviceFrameProps): React.ReactElement;

export interface CourseMarkProps { monogram: string; accent?: string; onAccent?: string; size?: number; label?: string }
export declare function CourseMark(props: CourseMarkProps): React.ReactElement;

export interface CartHeaderProps { title: string; meta?: string; monogram?: string; course?: string; accent?: string; onAccent?: string; back?: boolean; onBack?: () => void; battery?: number; charging?: boolean; offline?: boolean; device?: string; right?: React.ReactNode }
export declare function CartHeader(props: CartHeaderProps): React.ReactElement;

export interface ButtonProps { variant?: 'primary' | 'secondary' | 'danger' | 'onalert' | 'onalert-ghost'; block?: boolean; pill?: boolean; icon?: IconName; disabled?: boolean; loading?: boolean; type?: 'button' | 'submit'; onClick?: () => void; children?: React.ReactNode; 'aria-label'?: string; className?: string; style?: React.CSSProperties }
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
  zone?: boolean; zoneAlert?: boolean; zonePath?: string; zoneLabelAt?: MapPoint; zoneLabel?: string; inZone?: boolean;
  /** walking device: same position dot as a cart */ walker?: boolean; dropZone?: MapPoint & { r?: number; label?: string }; tap?: string; hazards?: { text: string; x: number; y: number }[]; nav?: boolean; height?: number; label?: string;
}
export declare function HoleMap(props: HoleMapProps): React.ReactElement;

export interface StatusTagProps { tone?: 'neutral' | 'brand' | 'go' | 'confirmed' | 'warning' | 'lightning' | 'zone'; icon?: IconName | false; children?: React.ReactNode }
export declare function StatusTag(props: StatusTagProps): React.ReactElement;

export interface BobAvatarProps { size?: number; onAccent?: boolean }
export declare function BobAvatar(props: BobAvatarProps): React.ReactElement;

export interface ChatBubbleProps { speaker?: 'bob' | 'golfer'; showName?: boolean; children?: React.ReactNode }
export declare function ChatBubble(props: ChatBubbleProps): React.ReactElement;


export interface AnswerCardProps { question?: string; headline: string; spoken?: boolean; onMute?: () => void; children?: React.ReactNode }
export declare function AnswerCard(props: AnswerCardProps): React.ReactElement;

export interface PromptChipProps { icon?: IconName; block?: boolean; onClick?: () => void; children?: React.ReactNode; className?: string }
export declare function PromptChip(props: PromptChipProps): React.ReactElement;

/** The chat bar on every Bob screen. Empty field: the round button is the mic. With text: it is Send. */
export interface ComposerProps { value?: string; focused?: boolean; placeholder?: string; locked?: boolean; lockedHint?: string; onSend?: (text: string) => void; onVoice?: () => void; onHoldStart?: () => void }
export declare function Composer(props: ComposerProps): React.ReactElement;

export interface BannerProps { tone?: 'offline' | 'suspended' | 'clear' | 'zone' | 'battery' | 'info'; icon?: IconName; action?: string; onAction?: () => void; children?: React.ReactNode }
export declare function Banner(props: BannerProps): React.ReactElement;

export interface AlertSheetProps { tone?: 'pace' | 'message' | 'battery'; overline?: string; title: string; action?: string; actionVariant?: 'primary' | 'secondary'; onAction?: () => void; autoDismiss?: string; secondaryAction?: string; onSecondary?: () => void; children?: React.ReactNode }
export declare function AlertSheet(props: AlertSheetProps): React.ReactElement;

export interface AlertTakeoverProps { kind?: 'lightning' | 'zone' | 'clear'; title: string; message?: string; detail?: React.ReactNode; detailIcon?: IconName; icon?: IconName; footnote?: string; action?: string; onAction?: () => void; flash?: boolean; escalated?: string; escalatedDetail?: string; exit?: { distance: string; direction: string; icon?: IconName; label?: string } }
export declare function AlertTakeover(props: AlertTakeoverProps): React.ReactElement;

export interface QRPanelProps { title?: string; hint?: string; size?: number; label?: string }
export declare function QRPanel(props: QRPanelProps): React.ReactElement;

export interface ChoiceCardProps { icon: IconName; title: string; description?: string; selected?: boolean; onSelect?: () => void }
export declare function ChoiceCard(props: ChoiceCardProps): React.ReactElement;

export interface GolferRowProps { name: string; initials?: string; status?: string; tone?: StatusTagProps['tone'] }
export declare function GolferRow(props: GolferRowProps): React.ReactElement;

export interface MenuItemProps { name: string; price: string; description?: string; image?: string; icon?: IconName; tag?: string; qty?: number; soldOut?: boolean; disabled?: boolean; onAdd?: () => void; onRemove?: () => void }
export declare function MenuItem(props: MenuItemProps): React.ReactElement;
export interface CategoryTabsProps { items: { id: string; label: string }[]; active?: string; onChange?: (id: string) => void; label?: string }
export declare function CategoryTabs(props: CategoryTabsProps): React.ReactElement;
export interface QuantityStepperProps { value: number; min?: number; label?: string; onIncrease?: () => void; onDecrease?: () => void }
export declare function QuantityStepper(props: QuantityStepperProps): React.ReactElement;

export interface ScreenProps { header?: React.ReactNode; banner?: React.ReactNode; actions?: React.ReactNode; dock?: React.ReactNode; theme?: 'day' | 'dusk'; bodyStyle?: React.CSSProperties; children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function Screen(props: ScreenProps): React.ReactElement;
export interface ActionBarProps { children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function ActionBar(props: ActionBarProps): React.ReactElement;
export interface SectionLabelProps { as?: 'h2' | 'h3' | 'p'; id?: string; children?: React.ReactNode; style?: React.CSSProperties }
export declare function SectionLabel(props: SectionLabelProps): React.ReactElement;
export interface SegmentedControlProps { items: { id: string; label: string; note?: string }[]; value?: string; onChange?: (id: string) => void; label?: string }
export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement;
export interface ListRowProps { title: string; description?: string; icon?: IconName; value?: React.ReactNode; chevron?: boolean; tone?: 'default' | 'danger'; href?: string; onClick?: () => void }
export declare function ListRow(props: ListRowProps): React.ReactElement;
export declare function List(props: { children?: React.ReactNode }): React.ReactElement;
/** Replaces the chat bar while Bob listens: live transcript, level meter, cancel and send. */
export interface VoiceBarProps { state?: 'listening' | 'holding' | 'thinking' | 'error'; /** drive view: in a TopSheet, listening only, transcript clamped to its last two lines */ docked?: boolean; /** held, in a bottom TopSheet: the left button types in the chat instead of cancelling (the sheet has its own close) */ typeInstead?: boolean; onType?: () => void; transcript?: string; caption?: string; errorText?: string; onCancel?: () => void; onSend?: () => void; onRetry?: () => void; style?: React.CSSProperties }
export declare function VoiceBar(props: VoiceBarProps): React.ReactElement;
/** Menu · Ask Bob, the app's one navigation control. placement 'top' (docked in the cradle: top right of the map) or 'bottom' (held: bottom centre). Ask Bob is tap and talk in both. The parent must be position: relative. badge: what the dot on Menu means, e.g. 'order in progress'. */
export interface DriveControlProps { placement?: 'top' | 'bottom'; state?: 'idle' | 'listening'; badge?: string; /** course skin: Ask Bob in the course colour, onAccent for its label and icon */ accent?: string; onAccent?: string; menuOpen?: boolean; onMenu?: () => void; onTalk?: () => void; style?: React.CSSProperties }
export declare function DriveControl(props: DriveControlProps): React.ReactElement;
/** A sheet anchored to an edge for what Menu · Ask Bob opens: 'top' in the cradle, 'bottom' when held. scrim dims what is under it; padded adds the standard inner spacing. */
export interface TopSheetProps { edge?: 'top' | 'bottom'; scrim?: boolean; padded?: boolean; label?: string; onClose?: () => void; children?: React.ReactNode; style?: React.CSSProperties }
export declare function TopSheet(props: TopSheetProps): React.ReactElement;
export interface QuickActionItem { id?: string; icon: IconName; label: string; detail?: string; tone?: 'ready'; badge?: boolean; disabled?: boolean; onClick?: () => void }
/** What Menu opens, in a TopSheet (top in the cradle, bottom when held): music controls, up to three tiles, the hole picked by GPS. */
export interface QuickActionsProps { title?: string; music?: { title?: string; source?: string; playing?: boolean; /** 'off': Spotify not connected (Connect); 'error': not responding (Try again) */ status?: 'off' | 'error'; action?: string }; items?: QuickActionItem[]; hole?: { title: string; detail?: string }; onClose?: () => void; onMusicAction?: () => void; onPlayPause?: () => void; onNextSong?: () => void; onPrevHole?: () => void; onNextHole?: () => void }
export declare function QuickActions(props: QuickActionsProps): React.ReactElement;
/** What Bob reads back before sending a food order. items: the lines; facts: label/value rows such as Pick up and Pay; total. The screen around it carries Change and Place order. */
export interface OrderSummaryProps { items: { name: string; qty?: number; price: string; tag?: string }[]; facts?: { label: string; value: string }[]; total?: string; label?: string }
export declare function OrderSummary(props: OrderSummaryProps): React.ReactElement;
export interface ScorePlayer { name: string; strokes?: number; onIncrease?: () => void; onDecrease?: () => void }
/** Score entry sheet after a hole: one row per golfer on this cart, starting at par. */
export interface ScoreEntryProps { hole: number | string; par: number; title?: string; players: ScorePlayer[]; save?: string; later?: string; onSave?: () => void; onLater?: () => void }
export declare function ScoreEntry(props: ScoreEntryProps): React.ReactElement;
/** Nine holes: a row per hole, a column per golfer; scores is per player, null when not played yet. */
export interface ScoreCardProps { players: { name: string; short?: string; mine?: boolean }[]; holes: { n: number; par: number; scores?: (number | null)[]; current?: boolean }[]; totalLabel?: string; label?: string }
export declare function ScoreCard(props: ScoreCardProps): React.ReactElement;
export interface ToastProps { title: string; message?: string; icon?: IconName; tone?: 'neutral' | 'success'; action?: string; onAction?: () => void; style?: React.CSSProperties }
export declare function Toast(props: ToastProps): React.ReactElement;
export interface ConfirmSheetProps { title: string; confirm?: string; cancel?: string; destructive?: boolean; onConfirm?: () => void; onCancel?: () => void; children?: React.ReactNode }
export declare function ConfirmSheet(props: ConfirmSheetProps): React.ReactElement;
export interface ProgressStepsProps { steps: { label: string; note?: string; icon?: IconName }[]; current?: number; label?: string }
export declare function ProgressSteps(props: ProgressStepsProps): React.ReactElement;
export interface EmptyStateProps { title: string; icon?: IconName; action?: string; onAction?: () => void; children?: React.ReactNode }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
export interface SkeletonProps { variant?: 'rows' | 'text'; count?: number; label?: string }
export declare function Skeleton(props: SkeletonProps): React.ReactElement;

export interface KeypadProps { filled?: number; length?: number; onKey?: (key: string) => void }
export declare function Keypad(props: KeypadProps): React.ReactElement;

declare global {
  interface Window {
    TeemeupCart: {
      Icon: typeof Icon; iconNames: IconName[]; DeviceFrame: typeof DeviceFrame; CourseMark: typeof CourseMark; CartHeader: typeof CartHeader;
      Button: typeof Button; IconButton: typeof IconButton; YardageReadout: typeof YardageReadout; HoleMap: typeof HoleMap;
      StatusTag: typeof StatusTag; BobAvatar: typeof BobAvatar; ChatBubble: typeof ChatBubble; AnswerCard: typeof AnswerCard; PromptChip: typeof PromptChip; Composer: typeof Composer;
      Banner: typeof Banner; AlertSheet: typeof AlertSheet; AlertTakeover: typeof AlertTakeover; QRPanel: typeof QRPanel; ChoiceCard: typeof ChoiceCard;
      GolferRow: typeof GolferRow; Keypad: typeof Keypad; MenuItem: typeof MenuItem; CategoryTabs: typeof CategoryTabs; QuantityStepper: typeof QuantityStepper;
      Screen: typeof Screen; ActionBar: typeof ActionBar; SectionLabel: typeof SectionLabel; SegmentedControl: typeof SegmentedControl; ListRow: typeof ListRow; List: typeof List;
      VoiceBar: typeof VoiceBar; DriveControl: typeof DriveControl; TopSheet: typeof TopSheet; QuickActions: typeof QuickActions; OrderSummary: typeof OrderSummary; ScoreEntry: typeof ScoreEntry; ScoreCard: typeof ScoreCard; Toast: typeof Toast; ConfirmSheet: typeof ConfirmSheet; ProgressSteps: typeof ProgressSteps; EmptyState: typeof EmptyState; Skeleton: typeof Skeleton;
    };
  }
}
