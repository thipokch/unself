#version 320 es
#define S(a,b,t)smoothstep(a,b,t)

precision highp float;

layout(location=0)out vec4 fragColor;

layout(location=0)uniform float timeElapsed;
layout(location=1)uniform vec2 size;
layout(location=2)uniform vec3 colorA;
layout(location=3)uniform vec3 colorB;
layout(location=4)uniform vec3 colorC;
layout(location=5)uniform vec3 colorD;
layout(location=6)uniform sampler2D image;

// METHODS

float random1f(vec2 st){
    return fract(sin(dot(st.xy,vec2(22.9878,178.233)))*93758.5453123);
}

mat2 rot(float a)
{
    float s=sin(a);
    float c=cos(a);
    return mat2(c,-s,s,c);
}

vec2 hash(vec2 p)
{
    p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));
    return fract(sin(p)*43758.5453);
}

float noise(in vec2 p)
{
    vec2 i=floor(p);
    vec2 f=fract(p);
    
    vec2 u=f*f*(3.-2.*f);
    
    float n=mix(mix(dot(-1.+2.*hash(i+vec2(0.,0.)),f-vec2(0.,0.)),
    dot(-1.+2.*hash(i+vec2(1.,0.)),f-vec2(1.,0.)),u.x),
    mix(dot(-1.+2.*hash(i+vec2(0.,1.)),f-vec2(0.,1.)),
    dot(-1.+2.*hash(i+vec2(1.,1.)),f-vec2(1.,1.)),u.x),u.y);
    return.5+.5*n;
}

// SHADER

void main(){
    
    vec3 comp=colorA;
    float alph=1.;
    
    vec2 uv=gl_FragCoord.xy/size.xy;
    
    float ratio=size.x/size.y;
    
    vec2 tuv=uv-.5;
    
    // rotate gradient with Noise
    float degree=noise(vec2(timeElapsed*.1,tuv.x*tuv.y));
    
    tuv.y*=1./ratio;
    tuv*=rot(radians((degree-.5)*720.+180.));
    tuv.y*=ratio;
    
    // gradient wave with sin
    float frequency=5.;
    float amplitude=30.;
    float speed=timeElapsed*.75;
    tuv.x+=sin(tuv.y*frequency+speed)/amplitude;
    tuv.y+=sin(tuv.x*frequency*1.5+speed)/(amplitude*.5);
    
    // draw the gradient
    vec3 layer1=mix(colorA,colorB,S(-.3,.2,(tuv*rot(radians(-5.))).x));
    
    // a. image composition
    
    vec3 layer2=colorD;
    // add noise to layers
    layer1=mix(colorC,layer1,random1f(uv)>.125?1.:0.);
    layer2=mix(colorA,layer2,random1f(uv)>.125?1.:0.);
    vec4 img=texture(image,uv);
    float gray=(img.r*.21+img.g*.72+img.b*.07);
    comp=mix(layer2,layer1,gray);
    comp*=img.a;
    alph=img.a;
    
    // b. gradient composition
    
    // vec3 layer2=colorC;
    // comp=mix(layer1,layer2,S(.5,-.3,tuv.y));
    // // noise alpha
    // float mixAlph=(random1f(uv)>.4?1.:0.);
    // comp=mix(colorD,comp,mixAlph);
    
    fragColor=vec4(comp,alph);
}

