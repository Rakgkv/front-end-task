export interface ITariff {
    rank ?: string
    provider ?: IProvider
    product ?: IProduct
    contractTerm ?: IContractTerm
    remarks ?: Array<IRemarks>
    cost ?: ICost
    signup ?: ISignup

}

export interface ISignup {
    responsive ?: IResponsive
}

export interface IResponsive {
    url ?: string
}

export interface ICost {
    effectiveCost ?: IEffectiveCost
}

export interface IEffectiveCost {
    amount ?: string
    content ?: IContent
}

export interface IContractTerm {
    downloadSpeed ?: IDownloadSpeed
    uploadSpeed ?: IUploadSpeed
}

export interface IDownloadSpeed {
    unit ?: string
    amount ?: string
    content ?: IContent
}

export interface IUploadSpeed {
    unit ?: string
    amount ?: string
    content ?: IContent
}

export interface IProvider {
    logoUrl ?: string
    content? : IContent
}

export interface IContent {
    text ?: string
}

export interface ICaption {
    text ?: string
}

export interface IProduct {
    content? : IContent
}

export interface IRemarks {
     caption ?: ICaption
}
