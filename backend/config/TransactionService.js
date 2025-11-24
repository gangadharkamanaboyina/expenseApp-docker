const transactionService = require('./TransactionService');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Health Check
app.get('/health', (req,res)=>{
    res.json("This is the health check");
});

/*******************************
 *  FIXED API — Now uses /api/
 *******************************/

// ADD TRANSACTION
app.post('/api/transaction', (req,res)=>{
    try{
        const t = moment().unix();
        console.log(`{ "timestamp": ${t}, "msg": "Adding Expense", "amount": ${req.body.amount}, "Description": "${req.body.desc}" }`);
        
        const success = transactionService.addTransaction(req.body.amount, req.body.desc);
        
        if (success === 200) {
            res.json({ message: 'added transaction successfully'});
        }
    }catch (err){
        res.json({ message: 'something went wrong', error : err.message});
    }
});

// GET ALL TRANSACTIONS
app.get('/api/transaction', (req,res)=>{
    try{
        transactionService.getAllTransactions(function (results) {
            const transactionList = results.map(row => ({
                id: row.id,
                amount: row.amount,
                description: row.description
            }));
            
            console.log(`{ "timestamp": ${moment().unix()}, "msg": "Getting All Expenses" }`);
            console.log(`{ "expenses": ${JSON.stringify(transactionList)} }`);
            
            res.status(200).json({result:transactionList});
        });
    }catch (err){
        res.json({message:"could not get all transactions",error: err.message});
    }
});

//DELETE ALL TRANSACTIONS
app.delete('/api/transaction',(req,res)=>{
    try{
        transactionService.deleteAllTransactions(function(){
            console.log(`{ "timestamp": ${moment().unix()}, "msg": "Deleted All Expenses" }`);
            res.status(200).json({message:"delete function execution finished."});
        });
    }catch (err){
        res.json({message: "Deleting all transactions may have failed.", error:err.message});
    }
});

//DELETE ONE TRANSACTION
app.delete('/api/transaction/id', (req,res)=>{
    try{
        transactionService.deleteTransactionById(req.body.id, function(){
            res.status(200).json({message: `transaction with id ${req.body.id} seemingly deleted`});
        });
    } catch (err){
        res.json({message:"error deleting transaction", error: err.message});
    }
});

//GET SINGLE TRANSACTION
app.get('/api/transaction/id',(req,res)=>{
    try{
        transactionService.findTransactionById(req.body.id,function(result){
            const row = result[0];
            res.status(200).json({
                id: row.id,
                amount: row.amount,
                desc: row.desc
            });
        });
    }catch(err){
        res.json({message:"error retrieving transaction", error: err.message});
    }
});

app.listen(port, () => {
    console.log(`{ "timestamp": ${moment().unix()}, "msg": "App Started on Port ${port}" }`);
});
