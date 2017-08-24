class FakeDiveService {
    static diveList = [
            {
                id: 0,
                site: 'Fethiye - Afkule',
                meter: '21',
                minute: '24',
                date: new Date(),
                notes: ''
            },
            {
                id: 1,
                site: 'Bodrum - Küçük Reef',
                meter: '24',
                minute: '32',
                date: new Date(),
                notes: 'İlk kebap dalışı'
            },
            {
                id: 2,
                site: 'Fethiye - Sarıyarlar',
                meter: '24',
                minute: '20',
                date: new Date(),
                notes: ''
            },
            {
                id: 3,
                site: 'Kaş - Kanyon',
                meter: '27',
                minute: '35',
                date: new Date(),
                notes: 'Tünelden geçtik'
            }
        ];
    static getDiveList(){
        return this.diveList;
    }
    static getDiveById(id) {
        return this.diveList.filter(dive => dive.id === id)[0];
    }
    static addNewDive(newDive){
        this.diveList.push(newDive);
    }
    static changeDiveInfo(diveData){
        this.diveList = this.diveList.map(dive => dive.id === diveData.id ? diveData : dive);
    }
}

export default FakeDiveService;