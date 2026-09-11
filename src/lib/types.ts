export type ItemType='Smartphone'|'Laptop'|'Tablet'|'Monitor'|'Television'|'Printer'|'Keyboard'|'Headphones'|'Battery'|'Other Electronics';
export type Condition='Working'|'Damaged'|'Non-functional';
export type Battery='Yes'|'No'|'Unknown';
export type PickupStatus='Pickup Requested'|'Pickup Scheduled'|'Item Collected'|'Received by Recycler'|'Responsibly Recycled';
export type RewardStatus='pending'|'verified'|'credited';
export interface Analysis{category:string;riskLevel:'Low'|'Medium'|'High';batteryHandling:string;disposalRecommendation:string;safetyGuidance:string;reasoning:string;isImageGrounded?:boolean;demoSimulated?:boolean;deviceAssessment?:string;recoverableMaterials?:string[];hazardWarnings?:string[];handlingPrecautions?:string[];environmentalImpactInsight?:string;visualObservations?:string[]}
export interface EwasteItem{id:string;itemType:ItemType;condition:Condition;battery:Battery;imageUrl?:string;analysis:Analysis;status:PickupStatus;createdAt:string}
export interface Recycler{id:string;name:string;location:string;acceptedItems:ItemType[];certificationStatus:string;rating:number;pickupAvailability:string}
export interface Pickup{id:string;itemId:string;recyclerId:string;address:string;date:string;time:string;quantity:number;contact:string;status:PickupStatus;createdAt:string;userId?:string;estimatedReward?:number;finalReward?:number;rewardStatus?:RewardStatus}
export interface Certificate{id:string;pickupId:string;number:string;issuedAt:string;rewardAmount?:number;rewardStatus?:'credited'}
