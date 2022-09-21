export type RouteStackParamList = {
    HomePage: undefined;
    ProfileHome: undefined;
    Loginn: undefined;
    DoctorProfileDetails: undefined;
    ProfileSuccess: undefined;
    AddClinicPage: undefined;
    ClinicDetailsPage: undefined;
    ClinicDetails: undefined;
    ClinicSuccess: undefined;
    AppointmentPage: undefined;
    AppointmentDetails: undefined;
    AppointmentCountDetails: undefined;
    Menu: undefined;
    Details: { patientId: number, patientName: string, patientAge: number, patientGender: string, patientMobile: number };
    Routes: undefined;
    Actions: { patientId: number, patientName: string, patientAge: number, patientGender: string, patientMobile: number };
    List: { patientId: number, patientName: string, patientAge: number, patientGender: string, patientMobile: number };
    Symptoms: undefined,
    SymptomsList: { symptoms: object };
    SymptomsManage: { symptoms: object };

    Prescription: undefined;
    PrescriptionList: { prescriptionView: object };
    PrescriptionManage: { prescription: object };
    PrescriptionView: { prescription: object, prescriptionDose: object, startFrom: string, instructions: string }

    Advices: undefined;
    AdvicesList: { advices: object, checkedAdvices: object };
    AdvicesManage: { advices: object, checkedAdvices: object };
  

    
    Footer: undefined;

};