export type CompanyFormDataType = {
    companyName: string;
    location: string;
    companyEmail: string;
    companySize: companySize;
    companyDescription: string;
};

export type companySize =
    | '2 - 10'
    | '11 - 50'
    | '51 - 200'
    | '201 - 500'
    | '500 - 1000'
    | 'More than 1000';
