const Stomp = require('stompjs');

export default {
    namespace: 'xswapdown',
    state: {
        SBFOrder: null,
        SBFHQ: null,
    },
    reducers: {
        updateSBFOrder(state, { payload: SBFOrder }) {
            return { ...state, SBFOrder };
        },
    },
    subscriptions: {
        openSocket({ dispatch }) {
            const ws = new WebSocket('ws://192.168.87.103:15674/ws');
            const client = Stomp.over(ws);
            client.heartbeat.incoming = 0;
            client.connect(
                'bond',
                'bond',
                () => {
                    client.subscribe(
                        '/exchange/xswapdown/',
                        (d: any) => {
                            const xswapdown = JSON.parse(d.body);
                            dispatch({
                                type: 'updateSBFOrder',
                                payload: xswapdown,
                            });
                        },
                        { 'auto-delete': true },
                    );
                },
                (evt: any) => {
                    console.log(`error: ${evt}`);
                },
                '/',
            );
        },
    },
};
