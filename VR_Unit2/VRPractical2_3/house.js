class = House {
    constructor(x, y, z) {
        this.group = new THREE.Group();
        this.group.position.set(x, y, z);
        
        let wallsGeometry = new THREE.BoxGeometry(10, 6, 10);
        let wallsMaterial = new THREE.MeshLambertMaterial({ color: 0xffcc99 });
        let walls = new THREE.Mesh(wallsGeometry, wallsMaterial);
        walls.position.y = 3;
        this.group.add(walls);
       