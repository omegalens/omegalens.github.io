#ifdef GL_ES
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uDirection;

varying vec2 vTexCoord;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 st = gl_FragCoord.xy / uResolution;
  
  float t = uTime * 0.5;
  vec2 direction = normalize(uMouse - st);
  st += t * direction * uDirection;
  
  float a = random(floor(st * 50.0));
  a = step(0.95, a);
  
  gl_FragColor = vec4(vec3(a), 1.0);
}
#endif
