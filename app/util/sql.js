module.exports = async function( modelName, method, options ){
        let result;
            try{
                result = await  this.model[ modelName ][method]( options )
            }catch( error ){
                result = null;
                console.log( error );
            }
        return result;
}