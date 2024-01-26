import {stob64s} from './b64';

test('Test tob64', () => {
  const str = '"Computer, compute to the last digit the value of pi" -- Spock';
  let b64s = [
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3BvY2s=',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3BvYw==',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3Bv',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3A=',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gUw==',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0g',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0=',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLQ==',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIg',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSI=',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaQ==',
  ];
  for (let i = 0; i < b64s.length; i++) {
    expect(b64s[i]).toBe(stob64s(str.substring(0, str.length - i)));
  }

  // Test URL modified base64 encoding
  b64s = [
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3BvY2s',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3BvYw',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3Bv',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3A',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gUw',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0g',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLQ',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIg',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSI',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaQ',
  ];
  for (let i = 0; i < b64s.length; i++) {
    expect(b64s[i]).toBe(
      stob64s(str.substring(0, str.length - i), {b64chars: 'url'})
    );
  }

  // Test YUI modified base64 encoding
  b64s = [
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3BvY2s-',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3BvYw--',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3Bv',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gU3A-',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0gUw--',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0g',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLS0-',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIgLQ--',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSIg',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaSI-',
    'IkNvbXB1dGVyLCBjb21wdXRlIHRvIHRoZSBsYXN0IGRpZ2l0IHRoZSB2YWx1ZSBvZiBwaQ--',
  ];
  for (let i = 0; i < b64s.length; i++) {
    expect(b64s[i]).toBe(
      stob64s(str.substring(0, str.length - i), {b64chars: 'yui'})
    );
  }
});
