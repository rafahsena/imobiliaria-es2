import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        const funcionario = await prisma.funcionario.findUnique({
            where: {
                email
            }
        })

        if (funcionario && (await bcrypt.compare(password, funcionario.password))) {
            // Create token
            const token = jwt.sign(
            { funcionario_id: funcionario.id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
            );

            // console.log(token);
    
            // save user token
            await prisma.funcionario.update({
                where: {
                    email
                },
                data: {
                    token
                }
            })
    
            // user
            res.status(200).json(funcionario);
        }
        res.status(400).send("Invalid Credentials");

    } catch (err) {
        console.log(err);
    }
  }


  export const register = async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { nome, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && nome)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const employeeAlreadyCreated = await prisma.funcionario.findUnique({
        where: {
            email
        }
      });
  
      if (employeeAlreadyCreated) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const funcionario = await prisma.funcionario.create({
        data: {
            nome,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        }
      });
  
      // Create token
      const token = jwt.sign(
        { funcionario_id: funcionario.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      await prisma.funcionario.update({
        where: {
            email
        },
        data: {
            token
        }
      })
  
      // return new user
      res.status(201).json(funcionario);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  };