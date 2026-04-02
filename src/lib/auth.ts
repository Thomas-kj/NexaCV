// Secure SHA-512 hash-based authentication system

// SHA-512 hash function implementation
const sha512 = async (message: string): Promise<string> => {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-512', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

// Predefined SHA-512 hash (your provided hash)
const PREDEFINED_HASH = "6a9230377b5dcabe54f8115b60ce54dbf89412f936e8d7c62f1264b639b4c8e0f2ec0b5f35527342706972c4d3433bda6ec07698d62e49a227b0b9f8b3d0ce83";

// Obfuscated hash function to make it harder to understand
const _0x7a4f = async (s: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(s);
  const hash = await crypto.subtle.digest('SHA-512', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Obfuscated predefined hash
const _0x9c2e = "6a9230377b5dcabe54f8115b60ce54dbf89412f936e8d7c62f1264b639b4c8e0f2ec0b5f35527342706972c4d3433bda6ec07698d62e49a227b0b9f8b3d0ce83";

// Validate credentials using SHA-512
export const validateCredentials = async (username: string, password: string): Promise<boolean> => {
  const correctUsername = "admin";
  
  // Hash the entered password using SHA-512
  const passwordHash = await sha512(password);
  
  // Compare with predefined hash
  return username === correctUsername && passwordHash === PREDEFINED_HASH;
};

// Obfuscated validation function
export const _0x3d8a = async (u: string, p: string): Promise<boolean> => {
  const userHash = await _0x7a4f(p);
  return u === "admin" && userHash === _0x9c2e;
};

// Helper function to calculate SHA-512 hash (for testing)
export const calculateSHA512 = async (input: string): Promise<string> => {
  return await sha512(input);
};

// Additional obfuscation layers
const _0x8b1c = (x: string): string => {
  return x.split('').reverse().join('');
};

const _0x2f7d = (x: string): string => {
  return x.substring(0, x.length / 2);
};

// Complex validation that's harder to reverse engineer
export const _0x5e9f = async (user: string, pass: string): Promise<boolean> => {
  if (user !== _0x8b1c("nimda")) return false;
  
  const hash1 = await _0x7a4f(pass);
  const hash2 = _0x9c2e;
  
  return hash1 === hash2;
};
