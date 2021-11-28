package com.projectR.projectR.service;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.projectR.projectR.exception.UserNotFoundException;
import com.projectR.projectR.model.Member;
import com.projectR.projectR.repo.MemberRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;



@Service
public class MemberService {
    private final MemberRepo memberRepo;

    @Autowired
    public MemberService(MemberRepo memberRepo) {

        this.memberRepo = memberRepo;
    }

    public Member addMember(Member member) throws WriterException, IOException {
        //Generation automatique des code Qr
        String data = "http://localhost:8080/member/"+member.getId()+"";
        BitMatrix matrix = new MultiFormatWriter()
                .encode(data, BarcodeFormat.QR_CODE, 70, 70);
        ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(matrix, "PNG", pngOutputStream);
        byte[] bytes = pngOutputStream.toByteArray();


        //Paasword hash
        int d = member.getPassword().hashCode();
        String passHach = String.format("%d",d);
        member.setPassword(passHach);
        member.setCodeQr(bytes);
        return memberRepo.save(member);
    }


    public List<Member> findAllMember(){

        return memberRepo.findAll();
    }
    public Member updateMember(Member member){

        return memberRepo.save(member);
    }
    public void deleteMember(Long id){

        memberRepo.deleteById(id);
    }
    public Member findMemberById(Long id){
       return memberRepo.findById(id).orElseThrow(() -> new UserNotFoundException("ssss"));

    }

}
