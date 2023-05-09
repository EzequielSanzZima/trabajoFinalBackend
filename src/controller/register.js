import { usuariosDao } from "../daos/index.js"
import { createHash } from "../utils/crypt.js"
import { sendMailNewUser } from "../utils/nodemailer.js"



export const postRegisterController = async (req, res) => {
    const usuarios = await usuariosDao.listarAll();
    const email = req.body.email;
    const password = createHash(req.body.password);
  
    if (usuarios.find((usuario) => usuario.email === email)) {
      req.session.message = 'Ya hay una cuenta con ese correo.';
      req.session.route = 'register';
      req.session.fileName = req.body.fileName;
      res.redirect('/error');
    } else {
      const newUser = {
        id: usuarios.length + 1,
        name: req.body.nombre,
        direction: req.body.direccion,
        age: req.body.edad,
        email,
        password,
        photo: req.body.fileName,
        phone: `+549${req.body.telefono}`,
      };
  
      await usuariosDao.guardar(newUser).then(() => {
        sendMailNewUser(newUser);
      });
  
      const msg = `NUEVO USUARIO REGISTARDO
        NOMBRE: ${newUser.nombre}
        DIRECCION: ${newUser.direction}
        EDAD: ${newUser.edad}
        TELEFONO: ${newUser.phone}
        EMAIL: ${newUser.email}
        FOTO PERFIL: /uploads/${newUser.photo}
        -----------------AQUITERMINA-----------------`;
  
      res.redirect('/login');
    }
  };

export const getRegisterController = ( req, res ) => {
    res.render('pages/register')
}






