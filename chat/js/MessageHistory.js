'use strict';

const types = {
    message: Message,
    response: Response,
    typing: Typing
};

function MessageHistory(messages) {

    messages = messages.list.map(message => {

        const type = types[message.type];

        return (
            <li className="clearfix" key={message.id}>
                {
                    type({
                        from:message.from,
                        message
                    })
                }
            </li>
        );
    });

    return (
        <ul>
            {messages}
        </ul>
    );
}

