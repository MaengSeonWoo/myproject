module.exports = {
    customerList : 'select * from customers order by id DESC limit ?, ? ',
    customerCount : 'select count(*) cnt from customers',
    customerInsert : 'insert into customers set ?',
    customerUpdate : 'update customers set ? where id = ?',
    customerDelete : 'delete from customers where id = ?',
}