package org.example.safety;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTTokenProvider {
    @Value("${jwt.secret}")
    private String secretKey;

    public String tokenGenerator(String user){
        Date currTime = new Date();
        Date maxTime = new Date(currTime.getTime() + Constants.VALIDITY);

        return Jwts
                .builder()
                .setSubject(user)
                .setIssuedAt(currTime)
                .setExpiration(maxTime)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public String getUserFromToken(String token){
        return Jwts
                .parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean validateToken(String token){
        try{
            Jws<Claims> claimsJws = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return !claimsJws.getBody().getExpiration().before(new Date());
        }catch (Exception e){
            System.err.println("Error trying to validate User:\n" + e.getMessage());
        }
        return false;
    }
}
