import { useState, useEffect } from "react";
import {db, storage} from '../firebase';
import classes from './addNewProfile.module.css';
import {
    collection,
    getDocs,
    addDoc
  } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { Form, Button, Row, Col, Modal, InputGroup } from 'react-bootstrap';

  function AddNewProfile() {
    
    const [progress, setProgress] = useState(0);
    const [symbolsLeft, setSymbolsLeft] = useState(250);
    const [isPromoted, setIsPromoted] = useState(false);
    const [newName, setNewName] = useState("");
    const [newPhotoLink, setNewPhotoLink] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newProfession, setNewProfession] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newShortDescription, setNewShortDescription] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newSite, setNewSite] = useState("")
    const [newInstagram, setNewInstagram] = useState("")
    const [newFacebook, setNewFacebook] = useState("")
    const [newTelegram, setNewTelegram] = useState("")
    const [newTags, setNewTags] = useState("")
    
    
    const [users, setUsers] = useState([]);
    const usersCollectionRefPending = collection(db, "pending");
  
    const createUser = async () => {
      await addDoc(usersCollectionRefPending, { name: newName, 
                                        isPromoted: isPromoted,
                                        category: newCategory, 
                                        photo: newPhotoLink, 
                                        location: newLocation,
                                        address: newAddress,
                                        profession: newProfession,
                                        shortDescription: newShortDescription,
                                        description: newDescription,
                                        phone: newPhone,
                                        email: newEmail,
                                        site: newSite,
                                        instagram: newInstagram,
                                        facebook: newFacebook,
                                        telegram: newTelegram,
                                        tags: newTags
      });
    };

    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRefPending);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers();
    }, []);

    const fileUploadHandler = (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      uploadFiles(file)
    }

    const uploadFiles = (file) => {
      if(!file) return;
      const storageRef = ref(storage, `/profilePhotos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes * 100));
        setProgress(prog);
      }, 
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => setNewPhotoLink(url))
        }
      );
    }


    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Заявка успешно отправлена
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Данные отправлены на проверку и вскорее Ваш профиль будет добавлен на сайт. Спасибо.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide, refreshPage}>Понятно</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    const [modalShow, setModalShow] = useState(false);
  
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      setValidated(true);
      event.preventDefault();
    };

    const addUser = (event) => {
      setTimeout(()=>{
        if (validated){
          setModalShow(true);
          event.preventDefault();
        }
      }, 500)
    }
    
    
    function refreshPage() {
      createUser();
      setTimeout(()=>{
        window.location.reload(true);
      },500)
    }
   
    
    return (
      <div className={classes.wrapper}>
        <div className={classes.formWrapper}>
          <h3 className={classes.title}>Добавить нового специалиста</h3>

          <Form className={classes.forma} noValidate validated={validated} onSubmit={handleSubmit}>


            <Form.Group className="mb-2" controlId="formName">
              <Form.Label>Имя специалиста или компании <span className={classes.asterics}>*</span></Form.Label>
              <Form.Control required type="name" placeholder="Иванов Иван Иванович / Бар Медуза / Мастерская SuperFast" onChange={(event) => {
                setNewName(event.target.value);}}/>
            </Form.Group>

            <Row>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formCategory ">
                  <Form.Label>Категория <span className={classes.asterics}>*</span></Form.Label>
                  <Form.Select required aria-label="Default select example" type='select' onChange={(event) => {
                    setNewCategory(event.target.value);}
                  }>
                    <option>Выберите категорию</option>
                    <option value="babySitter">Babysitter</option>
                    <option value="beauty">Beauty</option>
                    <option value="cleaning">Cleaning (Уборка)</option>
                    <option value="handmade">Handmade</option>
                    <option value="tattoo">Tattoo</option>
                    <option value="guide">Гиды, Экскурсоводы</option>
                    <option value="cafe">Рестораны, кафе, бары</option>
                    <option value="clothingRepair">Ремонт одежды</option>
                    <option value="electronicRepair">Ремонт техники</option>
                    <option value="ferms">Фермы</option>
                    <option value="homeRepair">Ремонт по дому</option>
                    <option value="imobiliario">Риелторы</option>
                    <option value="insurance">Страховые агенты</option>
                    <option value="it">Интернет технологии</option>
                    <option value="carRepair">Ремонт авто</option>
                    <option value="medicine">Медицина</option>
                    <option value="pastryChef">Кондитеры, повары</option>
                    <option value="photographer">Фото/Видео</option>
                    <option value="sauna">Сауна, баня</option>
                    <option value="sport">Спорт</option>
                    <option value="teacher">Репетитор</option>
                    <option value="translator">Переводчики</option>
                    <option value="transportation">Перевозки</option>
                    <option value="other">Разное, другое</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2" controlId="formName">
                  <Form.Label>Выберите фото для профиля</Form.Label>
                  <Form.Control type="file" onChange={fileUploadHandler}/>
                  <Form.Text>Загружено {progress}%</Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formLocation">
                  <Form.Label>Из какого Вы города</Form.Label>
                  <Form.Control type="text" placeholder="Если это не важно - оставте поле пустым" onChange={(event) => {
                    setNewLocation(event.target.value);
                  }}/>
                </Form.Group>  
              </Col>
              <Col>
                <Form.Group className="mb-2" controlId="formProfession">
                  <Form.Label>Профессия или чем Вы занимаетесь <span className={classes.asterics}>*</span></Form.Label>
                  <Form.Control required type="text" placeholder="Ваша профессия или чем Вы занимаетесь" onChange={(event) => {
                    setNewProfession(event.target.value);
                  }}/>
                </Form.Group>  
              </Col>
            </Row>
            <Row>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formAdress">
                  <Form.Label>Адрес по которому Вас можно найти</Form.Label>
                  <Form.Control type="text" placeholder="(Это поле не обьязательное)" onChange={(event) => {
                    setNewAddress(event.target.value);
                  }}/>
                </Form.Group>  
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Form.Group className="mb-2" controlId="formDescription">
                  <Form.Label>Краткое описание <span className={classes.asterics}>*</span></Form.Label>
                  <Form.Control required as="textarea" maxLength={250} rows={3} type="text" placeholder="Краткое описание того, чем Вы занимаетесь. Будет показано в карточке профиля(лимит 250 символов)" onChange={(event) => {
                    setNewShortDescription(event.target.value);
                    setSymbolsLeft(250 - event.target.value.length)
                  }}/>
                  <Form.Text>Осталось {symbolsLeft} символов</Form.Text>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-2" controlId="formDescription">
                  <Form.Label>Детальное описание</Form.Label>
                  <Form.Control as="textarea" rows={3} type="text" placeholder="Можете оставить пустым, если краткого описания достаточно. Будет отображено при открытии профиля" onChange={(event) => {
                    setNewDescription(event.target.value);
                  }}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2" controlId="formTags">
                  <Form.Label>Слова которые помогут найти Вас в поиске(Tags) </Form.Label>
                  <Form.Control as="textarea" rows={3} type="text" placeholder="Пример: портимао дантист стоматолог ортодонт" onChange={(event) => {
                    setNewTags(event.target.value);
                  }}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formPhone">
                  <Form.Label>Телефон</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"><i class="bi bi-telephone"></i></InputGroup.Text>
                    <Form.Control type="text" placeholder="Номер телефона, whatsapp, viber" onChange={(event) => {
                      setNewPhone(event.target.value);
                    }}/>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"><i class="bi bi-envelope"></i></InputGroup.Text>
                    <Form.Control type="email" placeholder="Введите Ваш email" onChange={(event) => {
                      setNewEmail(event.target.value);
                    }}/>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formSite">
                  <Form.Label>Сайт</Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"><i class="bi bi-card-text"></i></InputGroup.Text>
                  <Form.Control type="url" placeholder="Пример: https://www.example.com" onChange={(event) => {
                    setNewSite(event.target.value);
                  }}/>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formInstagram">
                  <Form.Label>Instagram</Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"><i class="bi bi-instagram"></i></InputGroup.Text>
                  <Form.Control type="url" placeholder="Пример: https://www.instagram.com/username" onChange={(event) => {
                    setNewInstagram(event.target.value);
                  }}/>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formFacebook">
                  <Form.Label>Facebook</Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"><i class="bi bi-facebook"></i></InputGroup.Text>
                  <Form.Control type="url" placeholder="Пример: https://www.facebook.com/username" onChange={(event) => {
                    setNewFacebook(event.target.value);
                  }}/>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md xs={12}>
                <Form.Group className="mb-2" controlId="formTelegram">
                  <Form.Label>Telegram</Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"><i class="bi bi-telegram"></i></InputGroup.Text>
                  <Form.Control type="url" placeholder="Пример: https://t.me/username" onChange={(event) => {
                    setNewTelegram(event.target.value);
                  }}/>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formisPromoted">
              <Form.Control type="hidden" onChange={() => {
                setIsPromoted(isPromoted);
              }}/>
            </Form.Group>

            <Form.Group className="mb-4 mt-3" controlId="formCheck">
              <Form.Check type="checkbox" label='Я все перепроверил(a), все правильно (кнопку "Отправить" надо нажимать два раза)*.' required/>
            </Form.Group>
            
              <Button className="mb-5" variant="primary" type="submit" onClick={addUser}>
                Отправить
              </Button>
 
          </Form>



          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    );
  }
  
  export default AddNewProfile;