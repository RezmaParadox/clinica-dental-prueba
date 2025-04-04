export interface ApiResponse {
    success: boolean;
    status: number;
    list: Doctors[];
}

export interface Doctors {
    name: string;
    specialty: string;
    university: string;
    photo: string;
}