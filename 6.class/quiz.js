

class Staff {
    constructor(staffName, staffDepartment, staffMonthwork){
        this.staffName = staffName;
        this.staffDepartment = staffDepartment;
        this.staffMonthwork = staffMonthwork;
    }
};

class StaffRegular extends Staff {
    constructor(hourTime) {
    }

    get sumMonthwork() {
        return hourTime * 10000
    }
}
class StaffTemporary extends Staff {
    constructor(hourTime) {
    }
    get sumMonthwork() {
        return hourTime * 8000
    }
}

const staffRegular = new StaffRegular('anna', 'it', 9);
staffRegular.sumMonthwork;