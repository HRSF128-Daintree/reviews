import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '3s', target: 100 },
    { duration: '15s', target: 1000 },
  ],
};
export default function() {
  http.get('http://localhost:3004/users/');
  sleep(1);
}