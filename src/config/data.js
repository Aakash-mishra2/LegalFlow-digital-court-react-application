
export const defaultCase = {
    caseType: '',
    caseTitle: '',
    description: '',
    defendantEmail: '',
    defendantName: '',
    evidenceUrl: '',
    filedBy: '',
    id: '',
    location: {
        state: '',
        district: '',
        court: ''
    },
    status: 'filed',
    lawyers: [],
    hearings: [],
    lawyerAssigned: false,
    nextHearingDate: null,
    filingDate: new Date().toISOString()
};

export const dummyCasesList = [
    {
        id: '1',
        caseTitle: 'Smith vs. Johnson Property Dispute',
        caseType: 'Civil Case',
        status: 'pending',
        filingDate: '2023-01-15',
        nextHearingDate: '2023-02-20',
        court: 'Delhi High Court',
        lawyerAssigned: true,
        description: 'Property ownership dispute between neighbors'
    },
    {
        id: '2',
        caseTitle: 'State vs. Williams Theft Case',
        caseType: 'Criminal Case',
        status: 'scheduled',
        filingDate: '2023-02-01',
        nextHearingDate: '2023-03-10',
        court: 'Mumbai District Court',
        lawyerAssigned: true,
        description: 'Theft charges against defendant Williams'
    }
];
