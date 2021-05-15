const initialState = {
    typingText: `Ribeye duis pig, ham hock ut quis enim landjaeger ea excepteur jowl jerky exercitation beef.  Labore flank pork belly occaecat tri-tip sint.  Boudin capicola laborum, 
    leberkas kielbasa mollit qui turkey ut ea ribeye rump sint tongue.  In prosciutto cillum laborum porchetta biltong ullamco drumstick ea ut excepteur pork loin meatball.  
    Cillum officia tenderloin shoulder, flank prosciutto bresaola eu beef ribs nisi sunt proident dolor.","Fatback short loin chislic proident ball tip tongue deserunt brisket landjaeger tempor.  
    Short ribs proident adipisicing officia turducken ex.  Lorem shank brisket ipsum chislic turducken ex.  Magna voluptate consequat cow consectetur cupidatat.  Alcatra enim biltong chislic 
    pork belly irure eu bacon sed.`
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
            };
    
        default:
            return state;
    }
}

export default reducer;