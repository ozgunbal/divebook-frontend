class FakeDiveService {
    static diveList = [
            {
                site: 'Fethiye - Afkule',
                meter: '21',
                minute: '24',
                date: new Date(),
                notes: ''
            },
            {
                site: 'Bodrum - Küçük Reef',
                meter: '24',
                minute: '32',
                date: new Date(),
                notes: 'İlk kebap dalışı'
            },
            {
                site: 'Fethiye - Sarıyarlar',
                meter: '24',
                minute: '20',
                date: new Date(),
                notes: ''
            },
            {
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
    static addNewDive(newDive){
        this.diveList.push(newDive);
    }
}

export default FakeDiveService;