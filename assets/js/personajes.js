export default class Personaje{
    constructor(id, name, species, image, status, gender, origin, location) {
    //Con estos privatizamos los atributos
        let _id = id;
        let _name = name;
        let _species = species;
        let _image = image;
        let _status = status;
        let _gender = gender;
        let _origin = origin;
        let _location = location;

        this.getId = () => _id;
        this.setId = (new_id) => _id = new_id;

        this.getName = () => _name;
        this.setName = (new_name) => _name = new_name;

        this.getSpecies = () => _species;
        this.setSpecies = (new_species) => _species = new_species;

        this.getImage = () => _image;
        this.setImage = (new_image) => _image = new_image;

        this.getStatus = () => _status;
        this.setStatus = (new_status) => _status = new_status;

        this.getGender = () => _gender;
        this.setGender = (new_gender) => _gender = new_gender;

        this.getOrigin = () => _origin;
        this.setOrigin = (new_origin) => _origin = new_origin;

        this.getLocation = () => _location;
        this.setLocation = (new_location) => _location = new_location;
    }
    //Método que retorna id
    get id() {
        return this.getId();
    }

    set id(new_id) {
        this.setId(new_id);
    }
    //Método que retorna nombre
    get name() {
        return this.getName();
    }

    set name(new_name) {
        this.setName(new_name);
    }

    get species() {
        return this.getSpecies();
    }

    set species(new_species) {
        this.setSpecies(new_species);
    }

    get image() {
        return this.getImage();
    }
    set image(new_image) {
        this.setImage(new_image);
    }

    get status() {
        return this.getStatus();
    }
    set status(new_status) {
        this.setStatus(new_status);
    }

    get gender() {
        return this.getGender();
    }
    set gender(new_gender) {
        this.setGender(new_gender);
    }

    get origin() {
        return this.getOrigin();
    }
    set origin(new_origin) {
        this.setOrigin(new_origin);
    }

    get location() {
        return this.getLocation();
    }
    set location(new_location) {
        this.setLocation(new_location);
    }
}