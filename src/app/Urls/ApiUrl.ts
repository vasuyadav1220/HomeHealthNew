const baseUrl = 'https://alora-plus.vercel.app/api/v1/';

export const superAdminEndPoints = {
    superAdminLogin: `${baseUrl}login`,
    getdoctors: `${baseUrl}doctors`,
    deletedoctor: `${baseUrl}doctor/`,
    doctorsAdd: `${baseUrl}doctor`,
    getnurses: `${baseUrl}nurses`,
    addnurses: `${baseUrl}nurse`,
    getpatients: `${baseUrl}patients`,
    addpatients: `${baseUrl}patient`,
    approveDoctor: `${baseUrl}doctor/accountStatusUpdate/`,
}
